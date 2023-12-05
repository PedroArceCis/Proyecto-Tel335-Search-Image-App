function HomePage() {
  return (
    <div>
      <div
       className="flex flex-auto bg-[#007bff] items-center justify-center">
        <h1>Web Scraping Tool</h1>
      </div>

      <div >
        <div className="grid grid-cols-1 p-2">
          <h2>Sobre nosotros:</h2>
          <p>
            Extrae datos de páginas web de manera fácil y rápida. Nuestra herramienta te permite obtener información valiosa
            de sitios web sin la necesidad de escribir código complicado. Simplemente ingresa la URL de la página que deseas
            analizar y nuestro sistema se encargará de extraer los datos relevantes para ti.
          </p>
          <button style={{ width: '100%', marginTop: '10px', background: '#007bff', color: '#fff', padding: '10px' }}>
            Iniciar Scraping
          </button>
        </div>
      </div>

      <div
        style={{
          position: 'fixed',
          bottom: '0',
          left: '0',
          width: '100%',
          background: '#f1f1f1',
          padding: '10px',
          textAlign: 'center',
          color: '#000000',
        }}
      >
        <p>
          Autores: <br />
          Autor 1 - autor1@example.com <br />
          Autor 2 - autor2@example.com <br />
          Autor 3 - autor3@example.com <br />
          Autor 4 - autor4@example.com <br />
          Universidad XYZ
        </p>
      </div>
    </div>
  );
}

export default HomePage;
