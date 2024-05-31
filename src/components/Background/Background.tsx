import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  XIcon,
} from 'react-share'
import ShareLogo from '../../assets/share.svg?react'
import * as styled from './styled'

export const Background = () => {
  const share = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet amet quia inventore exercitationem incidunt. Asperiores magnam aperiam minima est veritatis?',
        url: 'https://humandesignweb.com/',
      })
    }
  }

  return (
    <styled.Main>
      <styled.Container>
        <TwitterShareButton
          url="https://humandesignweb.com/"
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet amet quia inventore exercitationem incidunt. Asperiores magnam aperiam minima est veritatis?"
        >
          <XIcon />
        </TwitterShareButton>
        <FacebookShareButton
          url="https://humandesignweb.com/"
          hashtag="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet amet quia inventore exercitationem incidunt. Asperiores magnam aperiam minima est veritatis?
"
        >
          <FacebookIcon />
        </FacebookShareButton>
        <styled.ShareButton onClick={share}>
          <ShareLogo width={48} />
        </styled.ShareButton>
      </styled.Container>
    </styled.Main>
  )
}
