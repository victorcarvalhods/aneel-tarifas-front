
import { Table as CustomTable } from 'react-bootstrap';

export default function Table({ data }: any) {
  return (
    <>
      <CustomTable striped bordered hover className="my-4">
        <thead>
          <tr>
            <th>CNPJ da distribuidora</th>
            <th>Nome da distribuidora</th>
            {/* Adicione mais cabeçalhos de coluna conforme necessário */}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any) => (
            <tr key={row.id}>
              <td>{row.cnpj}</td>
              <td>{row.nome}</td>
              {/* Adicione mais células de dados conforme necessário */}
            </tr>
          ))}
        </tbody>
      </CustomTable>
    </>
  )
}