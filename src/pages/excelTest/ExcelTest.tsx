// import React, { useState } from 'react'
// import XLSX from 'xlsx'

// function App (): JSX.Element {
//   const [color, setColor] = useState<string>('white')

//   const handleFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const file = e.target.files?.[0]
//     if (file != null) {
//       const reader = new FileReader()
//       reader.onload = (evt: ProgressEvent<FileReader>): void => {
//         const target = evt.target
//         if (target) {
//           const bstr = target.result
//           // hacer algo con bstr
//         }
//         const bstr = evt.target.result
//         if (bstr) {
//           const wb = XLSX.read(bstr, { type: 'binary' })
//           const wsname = wb.SheetNames[0]
//           const ws = wb.Sheets[wsname]
//           const data = XLSX.utils.sheet_to_json(ws, { header: 1 })
//           const cellB1 = data[0][1]
//           if (cellB1 === 1) {
//             setColor('yellow')
//           } else if (cellB1 === 2) {
//             setColor('red')
//           } else {
//             setColor('white')
//           }
//         }
//       }
//       reader.readAsBinaryString(file)
//     }
//   }

//   return (
//     <div className="App" style={{ backgroundColor: color }}>
//       <h1>Subir y leer archivos Excel en React</h1>
//       <input type="file" accept=".xlsx" onChange={handleFile} />
//     </div>
//   )
// }

// export default App
