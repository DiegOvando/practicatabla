import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import "./index.css";

function Table() {
  const [precio, setPrecio] = useState([])
  const url = 'http://scratchya.com.ar/react/datos.php'
  const verData = async () => {
    const repuesta = await fetch(url)
    const data = await repuesta.json()
    console.log(data)
    setPrecio(data)
  }
  useEffect(() => {
    verData()
  }, [])

  const columnas = [
    {
      name: 'Codigo',
      selector: row => row.codigo
    },
    {
      name: 'Descripcion',
      selector: row => row.descripcion
    },
    {
      name: ' Precio',
      selector: row => row.precio
    },
    {
      name: ' Borrar',
      selector: row => <button onClick={() => {
        const index = precio.map(dato => {
          return dato.codigo === row.codigo;
        })

        precio.splice(index, 1);
        var newPrecio = [];
        Object.assign(newPrecio, precio);
        setPrecio(newPrecio);
      }}>Borrar</button>
    },
  ]

  return (
    <div>
      <center>
        <h1>Practica table</h1>
      </center>
      <div class="divcenter">
        <center>
          <DataTable
            columns={columnas}
            data={precio}
          />
        </center>
      </div>
    <div class="footer">
      <h3>By Diego Ovando Quevedo</h3>
    </div>
    </div>
  );
}

export default Table;