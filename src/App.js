import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { green, yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PrintIcon from '@mui/icons-material/Print';
import WatchIcon from '@mui/icons-material/Watch';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import PianoIcon from '@mui/icons-material/Piano';
import FluorescentIcon from '@mui/icons-material/Fluorescent';
import RadioIcon from '@mui/icons-material/Radio';
import BluetoothAudioIcon from '@mui/icons-material/BluetoothAudio';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import BookIcon from '@mui/icons-material/Book';

function App() {
  const [products, setProducts] = useState([
    {
      category: "Electronics",
      title: "HeadPhones",
      icon: HeadphonesIcon
    },
    {
      category: "Electronics",
      title: "Laptop",
      icon: LaptopMacIcon
    },
    {
      category: "Electronics",
      title: "Tablet",
      icon: TabletAndroidIcon
    },
    {
      category: "Electronics",
      title: "Printer",
      icon: PrintIcon
    },
    {
      category: "Electronics",
      title: "Smart Watches",
      icon: WatchIcon
    },
    {
      category: "Electronics",
      title: "Monitors",
      icon: DesktopMacIcon
    },
    {
      category: "Books",
      title: "The History",
      icon: BookIcon
    },
    {
      category: "Books",
      title: "Time to kill",
      icon: BookIcon
    },
    {
      category: "Books",
      title: "The Curious",
      icon: BookIcon    
    },
    {
      category: "Books",
      title: "Time to kill",
      icon: BookIcon
    },
    {
      category: "Books",
      title: "Homes",
      icon: BookIcon
    },
    {
      category: "Music",
      title: "Flute",
      icon: FluorescentIcon
    },
    {
      category: "Music",
      title: "Violin",
      icon: QueueMusicIcon
    },
    {
      category: "Music",
      title: "Drum",
      icon: BluetoothAudioIcon  
    },
    {
      category: "Music",
      title: "Piano",
      icon: PianoIcon
    },
    {
      category: "Music",
      title: "Radio",
      icon: RadioIcon
    }
  ])
  const [categorys, setCategorys] = useState(["All", "Electronics", "Books", "Music"])
  const [selected,setSelected] = useState("All")
  const [selectedCatProducts,setSelectedCatProducts] = useState([])

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[500]),
    maxWidth : "110px",
    minWidth : "50px",
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: green[700],
    }
  }))
  const activeButton = {
    backgroundColor: "green",
  }

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  function HomeIcon(props) {
    return (      
      <SvgIcon {...props} component={props?.image} />      
    );
  }

  useEffect(()=>{
    console.log(selected)
    if(selected !== "All"){
      let filteredProduct = []
      products?.map((data) =>{
        if(data?.category === selected){
        return (
          filteredProduct.push(data)
        )}
      })
      setSelectedCatProducts(filteredProduct)
    }
    else {
      setSelectedCatProducts(products)
    }
  },[selected])

  //category
  return (
    <>
      <Stack spacing={4} direction="row" alignItems="center"
      justifyContent="center" >
        {categorys && categorys?.map((data, index) => {
          return (
            <ColorButton name={data}  className={selected === data ? {activeButton} : ""} onClick={() => setSelected(data)} key={index} variant="contained">{data}</ColorButton>
          )
        })}
      </Stack>      
      
      <Box 
      mr={20} ml={20} mt={5}      
       sx={{ flexGrow: 1 }} >
      <Grid container  spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {selectedCatProducts && 
      selectedCatProducts?.map((data,index) => {
        return (
          <Grid key={index} item xs={2} sm={4} md={3}>
            <Item>
              <Card style={{backgroundColor : "#c8ccc9"}}>
                  <CardContent >
                    <Box
                      sx={{
                        '& > :not(style)': {
                          m: 2,
                        },
                      }}
                    >
                      <HomeIcon fontSize="large" image={data?.icon}/>
                    </Box>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {data?.title}
                    </Typography>
                  </CardContent>
              </Card>
            </Item>
          </Grid>
      )})
    }
    </Grid>
  </Box>
    </>
  );
}

export default App;
