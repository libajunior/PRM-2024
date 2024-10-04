import { Box, Stack, Typography } from "@mui/material"

function App() {

  return (
    <div className="wrapper">
      <Box sx={{
        padding: '1rem'
      }}>
        
        <Typography
          variant="h4"
          sx={{
            marginBottom: '1rem'
          }}
        >
          Primeira Seção
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '1rem'
          }}
        >

          <Stack
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor : '#4285F4',
              height: '4rem',
              width: '200px'
            }}
          >
            <Typography variant="subtitle1"
              sx={{
                color: 'white'
              }}
            >
              #4285F4
            </Typography>
          </Stack>

          <Stack
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor : '#0F9058',
              height: '4rem',
              flexGrow: 1
            }}
          >
            <Typography variant="subtitle1"
              sx={{
                color: 'white'
              }}
            >
              #0F9058
            </Typography>
          </Stack>

          <Stack
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor : '#DB4437',
              height: '4rem',
              width: '200px'
            }}
          >
            <Typography variant="subtitle1"
              sx={{
                color: 'white'
              }}
            >
              #DB4437
            </Typography>
          </Stack>

        </Box>

      </Box>
    </div>
  )
}

export default App
