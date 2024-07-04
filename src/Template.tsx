import { useContext } from "react";
import { AnimatedProgress, Box, FlexBox, FullScreen, DeckContext } from "spectacle";
import useWindowInnerSize from "./shared/useWindowInnerSize";

type Props = { color?: string; };
export const Template = ({ color = '#CECECE' }: Props) => {
  const deckContext = useContext(DeckContext)
  const size = useWindowInnerSize()

  // Need to use skipTo to have proper animations, update: it's the same
  function previous() {
    deckContext.skipTo({
      slideIndex: deckContext.activeView.slideIndex - 1,
      stepIndex: 0
    })
  }

  function next() {
    deckContext.skipTo({
      slideIndex: deckContext.activeView.slideIndex + 1,
      stepIndex: 0
    })
  }

  return (
    <Box>
      <FlexBox
        flexDirection="column"
        justifyContent={size.width < 768 ? "flex-end" : "center"}
        alignItems="center"
        position="absolute"
        left={0}
        bottom={size.width < 768 ? "2em" : "0"}
        top={0}
      >
        <Box>
          <button
            type="button"
            aria-label="Previous slide"
            style={{ background: "none", border: "none", outline: "0px", pointerEvents: "all", zIndex: 9999 }}
            onClick={previous}>
            <svg width="32px" height="32px" viewBox="0 0 512 828.586" role="presentation" focusable="false"
              style={{ transition: "fill 1s ease-in-out 0.2s", fill: deckContext.activeView.slideIndex > 0 ? color : "#00000000" }}>
              <path d="M512,97.707L414.293,0L0,414.293l414.293,414.293L512,730.88L195.414,414.293L512,97.707z"></path>
            </svg>
          </button>
        </Box>
      </FlexBox>

      <FlexBox
        flexDirection="column"
        justifyContent={size.width < 768 ? "flex-end" : "center"}
        alignItems="center"
        position="absolute"
        right={0}
        bottom={size.width < 768 ? "2em" : "0"}
        top={0}
      >
        <Box>
          <button
            type="button"
            aria-label="Next slide"
            style={{ background: "none", border: "none", outline: "0px", pointerEvents: "all", zIndex: 9999 }}
            onClick={next}>
            <svg width="32px" height="32px" viewBox="0 0 512 828.586" role="presentation" focusable="false"
              style={{ transition: "fill 1s ease-in-out 0.2s", fill: deckContext.activeView.slideIndex < deckContext.slideCount - 1 ? color : "#00000000" }} >
              <path d="M97.707,0L0,97.707l316.586,316.586L0,730.88l97.707,97.706L512,414.293L97.707,0z"></path>
            </svg>
          </button>
        </Box>
      </FlexBox>

      <FlexBox
        justifyContent="space-between"
        position="absolute"
        bottom={size.width < 768 ? undefined : "0"}
        top={size.width < 768 ? "0" : undefined}
        width={1}
      >
        <Box padding="0 1em">
          {size.width >= 768 &&
            <FullScreen color={color} />
          }
        </Box>

        <Box padding="1em">
          <AnimatedProgress color={color} />
        </Box>
      </FlexBox>
    </Box>
  )
};