import Conectar from '@/components/Conectar';
import React from 'react';

import styles from '@/styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.content}>
            <h1>Bem-vindo ao Meu Aplicativo</h1>
            <div>
                <Conectar />
            </div>
        </div>
    );
}