import { createCanvas, registerFont, loadImage, Canvas } from 'canvas'
import path from 'path'
import fs from 'fs'

interface SeparatedText {
	line: string
	remaining: string
}

const createTextLine = (canvas: Canvas, text: string): SeparatedText => {
	const context = canvas.getContext('2d')
	const MAX_WIDTH = 1000 as const

	for (let i = 0; i < text.length; i += 1) {
		const line = text.substring(0, i + 1)

		if (context.measureText(line).width > MAX_WIDTH) {
			return {
				line,
				remaining: text.substring(i + 1),
			}
		}
	}

	return {
		line: text,
		remaining: '',
	}
}

const createTextLines = (canvas: Canvas, text: string): string[] => {
	const lines: string[] = []
	let currentText = text

	while (currentText !== '') {
		const separatedText = createTextLine(canvas, currentText)
		lines.push(separatedText.line)
		currentText = separatedText.remaining
	}
	return lines
}

const createOgp = async (dynamic:number):Promise<void> => {
	registerFont(path.resolve('./fonts/ipagp.ttf'), {
		family: 'ipagp',
	})

	const WIDTH = 1200 as const
	const HEIGHT = 630 as const
	const DX = 0 as const
	const DY = 0 as const
	const canvas = createCanvas(WIDTH, HEIGHT)
	const context = canvas.getContext('2d')

	const title = String(dynamic) + 'のページ'

	const lines = createTextLines(canvas, title)
	lines.forEach((line, index) => {
		const y = 314 + 80 * (index - (lines.length - 1) / 2)
		context.fillText(line, 600, y)
	})

	// context.fillStyle = 'white'
	// context.fillRect(0, 0, WIDTH, HEIGHT)
	const test = await loadImage(
		path.resolve('./public/kaleidico-26MJGnCM0Wc-unsplash (2).jpg')
	)

	context.font = '60px ipagp'
	context.fillStyle = 'black'
	context.textAlign = 'center'
	context.textBaseline = 'middle'
	context.drawImage(test, DX, DY, WIDTH, HEIGHT)
	// context.fillText('hogehoge', 600, 300)

	const buffer = canvas.toBuffer()
	fs.writeFileSync(path.resolve(`./puublic/ogp/${dynamic}.png`), buffer)

	// res.writeHead(200, {
	// 	'Cache-Control': 'public, max-age=315360000, s_maxage=315360000',
	// 	Expires: new Date(Date.now() + 315360000000).toUTCString(),
	// 	'Content-Type': 'image/png',
	// 	'Content-Length': buffer.length,
	// })
	// res.end(buffer, 'binary')
}

export default createOgp
