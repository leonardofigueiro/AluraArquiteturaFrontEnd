import Box from "@/components/Box/Box";
import Icon from "@/components/Icon/Icon";
import Image from "@/components/Image/Image";
import Text from "@/components/Text/Text";
import React from "react";

interface FeedProps {
  children: React.ReactNode
}

export default function Feed({children}) {
  return (
    <Box>
      
      <Text>
        Feed Base
      </Text>
      {children}
    </Box>
  )
}

Feed.Header = () => {
  return (
    <Box>
      <Image 
        src='https://github.com/leonardofigueiro.png' 
        alt='Leonardo Figueiró'
        styleSheet={{
          width: '128px',
          hight: '128px',
          borderRadius: '100%'
        }}
        />
      <Box 
        styleSheet={{
          flexDirection: 'row'
        }}
      >
      <Icon name="youtube"/>
      <Icon name="twitter"/>
      <Icon name="instagram"/>
      <Icon name="github"/>
      </Box>
      <Text>
        Feed Header
      </Text>
    </Box>
  )
}
Feed.Posts = () => {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  )
}
