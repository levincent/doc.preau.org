import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Technical Documentation">
      <main>
        <h1>Technical Documentation</h1>
        <p>Personal technical notes and projects.</p>

        <p>
          <a href="/telegram-n8n/">
            Telegram → n8n → Notion
          </a>
        </p>
      </main>
    </Layout>
  );
}