
import { Card } from 'react-bootstrap';
import { Table as CustomTable } from 'react-bootstrap';

export default function Table({ data }: any) {
  return (
    <>
        {data.length > 0 && (
        <Card className="mt-3">
          <Card.Body>Exibindo {data.length} resultados</Card.Body>
        </Card>
      )}
      <CustomTable striped bordered hover className="my-4">
        <thead>
          <tr>
            <th>CNPJ distribuidora</th>
            <th>Valor tarifa de uso</th>
            {/* Adicione mais cabeçalhos de coluna conforme necessário */}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any) => (
            <tr key={row.id}>
              <td>{row.numcnpjdistribuidora}</td>
              <td>{row.vlrtusd}</td>
              {/* Adicione mais células de dados conforme necessário */}
            </tr>
          ))}
        </tbody>
      </CustomTable>
    </>
  )
}