const {
  // DATABASE_URL,
  PORT,
} = process.env


const envError = (name: string) => {
  throw new Error(`Missing envinroment variable: ${name}`)
}

// if (!DATABASE_URL) {
//   envError('DATABASE_URL')
// }

if (!PORT) {
  envError('SERVER_PORT')
}

if (Number.isNaN(parseInt(PORT as string))) {
  throw new Error('Port must be a valid integer')
}

// export const databaseUrl = DATABASE_URL as string
export const serverPort = parseInt(PORT as string)
