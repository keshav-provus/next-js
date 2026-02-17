export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <header style={{ 
          backgroundColor: 'blue', 
          color: 'white', 
          padding: '1rem' 
        }}> 
          Header
        </header>
        {children}

        <footer style={{ 
          backgroundColor: 'blue', 
          color: 'white', 
          padding: '1rem' 
        }}> 
          Footer
        </footer>
      </body>
    </html>
  )
}