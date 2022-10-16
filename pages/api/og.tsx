import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { CSSProperties } from 'react'

export const config = {
  runtime: 'experimental-edge',
}

const ASSETS = {
  font: 'https://wantedspace.vercel.app/Pretendard-SemiBold.ttf',
  image: 'https://wantedspace.vercel.app/share.png',
}

const font = fetch(ASSETS.font).then((res) => res.arrayBuffer())

async function Og(req: NextRequest) {
  const fontData = await font
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title')

  return new ImageResponse(
    (
      <div style={{ ...styles.wrapper, background: `url(${ASSETS.image})` }}>
        <div style={styles.title}>{title?.replace('_', '\n')}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Pretendard',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 60,
    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    fontSize: 40,
    lineHeight: '150%',
    color: '#333',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
  },
}

export default Og
