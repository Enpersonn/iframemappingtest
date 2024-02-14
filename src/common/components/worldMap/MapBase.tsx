import { useRef, useState } from "react"

const MapBase = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [circleCoordinates, setCircleCoordinates] = useState<{ x: number, y: number }[]>([]);


    const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const x = e.clientX
        const y = e.clientY

        getPoint(x, y)

        setCircleCoordinates([...circleCoordinates, { x, y }]);


    }

    const getPoint = (x: number, y: number) => { }
    return (
        <canvas
            ref={canvasRef}
            id="map"
            width="1000"
            height="1000"
            className=" border-2 border-red-500"
        >

        </canvas>
    )
}