import { ImageResponse } from 'next/og'

export type OgImageOptions = {
  title: string
  subtitle?: string
  initials?: string
  primaryColor?: string
  secondaryColor?: string
  bgGradientFrom?: string
  bgGradientTo?: string
  width?: number
  height?: number
}

export function generateOgImage(options: OgImageOptions) {
  const {
    title,
    subtitle = '',
    initials = title.substring(0, 2).toUpperCase(),
    primaryColor = '#7ceb5a',
    secondaryColor = '#ffffff',
    bgGradientFrom = '#0a192f',
    bgGradientTo = '#0f2e1f',
    width = 1200,
    height = 630,
  } = options

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(to bottom right, ${bgGradientFrom}, ${bgGradientTo})`,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '120px',
              height: '120px',
              borderRadius: '60px',
              border: `4px solid ${primaryColor}`,
            }}
          >
            <span
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                color: primaryColor,
              }}
            >
              {initials}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <span
              style={{
                fontSize: '80px',
                fontWeight: 'bold',
                color: primaryColor,
                lineHeight: '1',
              }}
            >
              {title.toUpperCase()}
            </span>
            {subtitle && (
              <span
                style={{
                  fontSize: '60px',
                  fontWeight: 'bold',
                  color: secondaryColor,
                  lineHeight: '1',
                }}
              >
                {subtitle.toUpperCase()}
              </span>
            )}
          </div>
        </div>
      </div>
    ),
    {
      width,
      height,
    }
  )
}
