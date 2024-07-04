import { FlexBox, SlideLayout } from "spectacle";
import appleImage from "./apple.jpeg"
import firebaseImage from "./firebase.png"
import ParticleImage, {
    ParticleOptions,
    Vector,
    forces,
    ParticleForce
} from "react-particle-image";
import ResponsiveText from "../../shared/ResponsiveText";
import useWindowInnerSize from "../../shared/useWindowInnerSize";

const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
        // Get pixel
        const pixel = image.get(x, y);
        // Make a particle for this pixel if blue > 50 (range 0-255)
        return pixel.r > 40;
    },
    color: () => "white",
    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 40,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
        return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
    }
};

const particleOptions2: ParticleOptions = {
    filter: ({ x, y, image }) => {
        // Get pixel
        const pixel = image.get(x, y);
        // Make a particle for this pixel if blue > 50 (range 0-255)
        return pixel.r > 40;
    },
    color: ({ x, y, image }) => {
        const pixel = image.get(x, y);
        return `rgba(${pixel.r},${pixel.g},${pixel.b},${pixel.a})`
    },
    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 40,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
        return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
    }
};

const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 10);
};

function RecentExperience() {
    const size = useWindowInnerSize()
    const side = size.width < 768 ? 200 : 300

    return (
        <SlideLayout.Center backgroundColor="#161616">
            <FlexBox flexDirection="column">
                <ResponsiveText style={{ "zIndex": 3 }}>
                    In the last 5 years, I mainly focused on full-stack development of
                    a <strong>native macOS video application</strong> —Swift, SwiftUI, AppKit, WebRTC, Zoom Video SDK—
                    backed by a <strong>Firebase backend</strong> —Firestore, Functions, TypeScript, Node—.
                </ResponsiveText>
                <FlexBox flexDirection={size.width < 768 ? "column" : "row"}>
                    <FlexBox justifyContent="center" alignItems="center" width={`${side}px`} height={`${side}px`} style={{ "overflow": "hidden" }}>
                        <ParticleImage
                            src={appleImage}
                            width={640}
                            height={640}
                            scale={1}
                            entropy={10}
                            maxParticles={1000}
                            particleOptions={particleOptions}
                            mouseMoveForce={motionForce}
                            touchMoveForce={motionForce}
                            backgroundColor="#161616"
                            style={{ "zIndex": 2 }}
                        />
                    </FlexBox>
                    <FlexBox justifyContent="center" alignItems="center" width={`${side}px`} height={`${side}px`} style={{ "overflow": "hidden" }}>
                        <ParticleImage
                            src={firebaseImage}
                            width={640}
                            height={640}
                            scale={0.3}
                            entropy={10}
                            maxParticles={1000}
                            particleOptions={particleOptions2}
                            mouseMoveForce={motionForce}
                            touchMoveForce={motionForce}
                            backgroundColor="#161616"
                            style={{ "zIndex": 1 }}
                        />
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </SlideLayout.Center>
    );
}

export default RecentExperience;