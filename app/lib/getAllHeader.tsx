export default async function getAllHeader() {
    const res = await fetch('https://ms2.atramart.com/api/v1/header')

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}

// export default async function getAllHeader() {
//     try {
//       const res = await fetch('https://ms2.atramart.com/api/v1/header');
  
//       if (!res.ok) {
//         throw new Error('Failed to fetch data');
//       }
  
//       return res.json();
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }



// async function fetchHeaderData() {
//     const res = await fetch('https://ms2.atramart.com/api/v1/header');
  
//     if (!res.ok) {
//       throw new Error('Failed to fetch data');
//     }
  
//     return res.json();
//   }
  
//   export default async function handler(req, res) {
//     try {
//       const result = await fetchHeaderData();
//       res.status(200).json(result);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to fetch data' });
//     }
//   }