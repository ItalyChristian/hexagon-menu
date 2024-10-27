import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from "@/styles/Menu.module.css";
import useWindowSize from '@/hooks/useWindowSize';

export interface HexListProps {
  menuList?: any;
  title: string;
  subtitle: string;
}

export const HexList = ({ menuList, title, subtitle }: HexListProps) => {

  const { width } = useWindowSize();
  const isMobileSize = !!width && width <= 768;

  const [listLength, setlistLength] = useState<string>('4 items');

  useEffect(() => {
    if (menuList.length <= 4) {
      setlistLength('4 items');
    } else if (menuList.length == 5) {
      setlistLength('5 items');
    } else if (menuList.length == 6) {
      setlistLength('6 items');
    } else if (menuList.length == 7) {
      setlistLength('7 items');
    }
   
  }, [listLength, menuList.length]);

  return (
    <>
      { isMobileSize ? 

        <div className={styles.allFit}>
          <div className={styles.containerMobile}>
              <div className={styles.rowMobile}>
                {menuList.slice(0, 2).map((item: any) => 
                  <Link href={item.link} target="_blank">
                    <div key={item.id} className={styles.hexagon}>
                      <h1>{item.title}</h1>
                    </div>
                  </Link>
                )}
              </div>
              <div className={styles.rowMobile}>
                {menuList.slice(2, 4).map((item: any) => 
                  <Link href={item.link} target="_blank">
                    <div key={item.id} className={styles.hexagon}>
                      <h1>{item.title}</h1>
                    </div>
                  </Link>
                )}
              </div>
              <div className={styles.rowMobile}>
                {menuList.slice(4, 6).map((item: any) => 
                  <Link href={item.link} target="_blank">
                    <div key={item.id} className={styles.hexagon}>
                      <h1>{item.title}</h1>
                    </div>
                  </Link>
                )}
              </div>
          </div>      
        </div> 
        
        : 
      
        <> 
          <div className={styles.allFit}>
            <div className={styles.titleContainer}>
              <h1>
                { title }
              </h1>
              <h3 style={{ color: 'white'}}>
                { subtitle }
              </h3>
            </div>
            
            {(() => {
                {/* Aqui iremos utilizar switch para garantir que o itens do menu
                    fiquem bem organizados dentro da estrutura do menu. No caso,
                    de por exemplo, recebermos uma lista com apenas 5 itens, 
                    vamos fazer com que os primeiros que o 5º item fique no centro
                    da segunda linha do nosso menu. 
                */}

                switch (listLength) {
                  case '4 items':
                    return (
                      <>
                        <div className={styles.container}>
                          <div className={styles.row}>
                            {menuList.slice(0, 4).map((item: any) => 
                              <Link href={item.link} target="_blank">
                                <div key={item.id} className={styles.hexagon}>
                                  <h1>{item.title}</h1>
                                </div>
                              </Link>
                            )}
                          </div>
                        </div>
                      </>
                    )
                  case '5 items':
                    return (
                      <>
                        <div className={styles.container}>
                          <div className={styles.row}>
                            {menuList.slice(0, 4).map((item: any) => 
                              <Link href={item.link} target="_blank">
                                <div key={item.id} className={styles.hexagon}>
                                  <h1>{item.title}</h1>
                                </div>
                              </Link>
                            )}
                          </div>

                          <div className={styles.row}>
                            <div className={styles.hexagon}></div> 

                            <Link href={menuList[4].link} target="_blank">
                              <div className={styles.hexagon}>
                                <h1>{menuList[4].title}</h1>
                                </div>
                            </Link>

                            <div className={styles.hexagon}></div> 
                          </div>
                        </div>
                      </>
                    )
                  case '6 items':
                    return (
                      <>
                        <div className={styles.container}>
                          <div className={styles.row}>
                            {menuList.slice(0, 4).map((item: any) => 
                              <Link href={item.link} target="_blank">
                                <div key={item.id} className={styles.hexagon}>
                                  <h1>{item.title}</h1>
                                </div>
                              </Link>
                            )}
                          </div>

                          <div className={styles.row}>
                            <Link href={menuList[4].link} target="_blank">
                              <div className={styles.hexagon}>
                                <h1>{menuList[4].title}</h1>
                              </div>
                            </Link>
                            
                            <div className={styles.hexagon}></div> {/* blank space hahaha */}
                            
                            <Link href={menuList[5].link} target="_blank">
                              <div className={styles.hexagon}>
                                <h1>{menuList[5].title}</h1>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </>
                    )
                  case '7 items':
                    return (
                      <>
                        <div className={styles.container}>
                          <div className={styles.row}>
                            {menuList.slice(0, 4).map((item: any) => 
                              <Link href={item.link} target="_blank">
                                <div key={item.id} className={styles.hexagon}>
                                  <h1>{item.title}</h1>
                                </div>
                              </Link>
                            )}
                          </div>
                          <div className={styles.row}>
                            {menuList.slice(4, 7).map((item: any) => 
                              <Link href={item.link} target="_blank">
                                <div key={item.id} className={styles.hexagon}>
                                  <h1>{item.title}</h1>
                                </div>
                              </Link>
                            )}
                          </div>
                        </div>
                      </>
                    )
                  default:
                    return null
                }
              })()}
          </div>
        </>         
      }
    </>    
  );
}
