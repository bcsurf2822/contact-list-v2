//used to format phone numbers of importated JSON data
// export function formatNumber(e) {
//   if (e.length > 10) {
//     return (
//       e.substring(0, 1) +
//       "-" +
//       e.substring(1, 4) +
//       "-" +
//       e.substring(4, 7) +
//       " (" +
//       e.substring(7) +
//       ")"
//     );
//   }

//   return e;
// }

//function to generate random id for new contact
export const generateId = () => Math.round(Math.random() * 100000000);
