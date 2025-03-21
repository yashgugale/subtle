// cssProperties.ts

interface CSSProperty {
	name: string;
	description: string;
	sampleUse: string;
}

const cssProperties: Record<string, CSSProperty[]> = {
	boxModel: [
		{ name: 'width', description: 'Sets the width of an element.', sampleUse: 'width: 200px;' },
		{ name: 'height', description: 'Sets the height of an element.', sampleUse: 'height: 100px;' },
		{
			name: 'min-width',
			description: 'Sets the minimum width of an element.',
			sampleUse: 'min-width: 150px;'
		},
		{
			name: 'min-height',
			description: 'Sets the minimum height of an element.',
			sampleUse: 'min-height: 50px;'
		},
		{
			name: 'max-width',
			description: 'Sets the maximum width of an element.',
			sampleUse: 'max-width: 300px;'
		},
		{
			name: 'max-height',
			description: 'Sets the maximum height of an element.',
			sampleUse: 'max-height: 200px;'
		},
		{
			name: 'margin',
			description: 'Sets the outer spacing around an element.',
			sampleUse: 'margin: 10px 20px;'
		},
		{ name: 'margin-top', description: 'Sets the top margin.', sampleUse: 'margin-top: 15px;' },
		{
			name: 'margin-right',
			description: 'Sets the right margin.',
			sampleUse: 'margin-right: 10px;'
		},
		{
			name: 'margin-bottom',
			description: 'Sets the bottom margin.',
			sampleUse: 'margin-bottom: 20px;'
		},
		{ name: 'margin-left', description: 'Sets the left margin.', sampleUse: 'margin-left: 5px;' },
		{
			name: 'padding',
			description: 'Sets the inner spacing within an element.',
			sampleUse: 'padding: 15px;'
		},
		{ name: 'padding-top', description: 'Sets the top padding.', sampleUse: 'padding-top: 10px;' },
		{
			name: 'padding-right',
			description: 'Sets the right padding.',
			sampleUse: 'padding-right: 15px;'
		},
		{
			name: 'padding-bottom',
			description: 'Sets the bottom padding.',
			sampleUse: 'padding-bottom: 20px;'
		},
		{
			name: 'padding-left',
			description: 'Sets the left padding.',
			sampleUse: 'padding-left: 5px;'
		},
		{
			name: 'border',
			description: 'Sets the border properties of an element.',
			sampleUse: 'border: 1px solid black;'
		},
		{
			name: 'border-width',
			description: 'Sets the border thickness.',
			sampleUse: 'border-width: 2px;'
		},
		{
			name: 'border-style',
			description: 'Sets the border style.',
			sampleUse: 'border-style: dashed;'
		},
		{
			name: 'border-color',
			description: 'Sets the border color.',
			sampleUse: 'border-color: blue;'
		},
		{
			name: 'border-radius',
			description: 'Rounds the corners of an element.',
			sampleUse: 'border-radius: 5px;'
		},
		{
			name: 'border-top',
			description: 'Shorthand for top border properties.',
			sampleUse: 'border-top: 1px solid red;'
		},
		{
			name: 'border-right',
			description: 'Shorthand for right border properties.',
			sampleUse: 'border-right: 2px dotted green;'
		},
		{
			name: 'border-bottom',
			description: 'Shorthand for bottom border properties.',
			sampleUse: 'border-bottom: 3px solid blue;'
		},
		{
			name: 'border-left',
			description: 'Shorthand for left border properties.',
			sampleUse: 'border-left: 1px dashed black;'
		},
		{
			name: 'box-sizing',
			description: 'Defines how the box model calculates width and height.',
			sampleUse: 'box-sizing: border-box;'
		}
	],

	flexbox: [
		{ name: 'flex', description: 'Shorthand for flex properties.', sampleUse: 'flex: 1 1 auto;' },
		{
			name: 'flex-grow',
			description: 'Defines how much an item grows relative to others.',
			sampleUse: 'flex-grow: 1;'
		},
		{
			name: 'flex-shrink',
			description: 'Defines how much an item shrinks relative to others.',
			sampleUse: 'flex-shrink: 0;'
		},
		{
			name: 'flex-basis',
			description: 'Sets the initial size of a flex item.',
			sampleUse: 'flex-basis: 200px;'
		},
		{
			name: 'flex-direction',
			description: 'Sets the direction of flex items.',
			sampleUse: 'flex-direction: column;'
		},
		{
			name: 'flex-wrap',
			description: 'Controls whether flex items wrap to new lines.',
			sampleUse: 'flex-wrap: wrap;'
		},
		{
			name: 'justify-content',
			description: 'Aligns flex items along the main axis.',
			sampleUse: 'justify-content: space-between;'
		},
		{
			name: 'align-items',
			description: 'Aligns flex items along the cross axis.',
			sampleUse: 'align-items: center;'
		},
		{
			name: 'align-self',
			description: 'Overrides alignment for a specific flex item.',
			sampleUse: 'align-self: flex-end;'
		},
		{
			name: 'order',
			description: 'Sets the order of a flex item in the container.',
			sampleUse: 'order: 2;'
		}
	],

	grid: [
		{
			name: 'grid',
			description: 'Shorthand for grid properties.',
			sampleUse: 'grid: 100px 1fr / 1fr 2fr;'
		},
		{
			name: 'grid-template-columns',
			description: 'Defines the columns of a grid.',
			sampleUse: 'grid-template-columns: 1fr 2fr;'
		},
		{
			name: 'grid-template-rows',
			description: 'Defines the rows of a grid.',
			sampleUse: 'grid-template-rows: 100px auto;'
		},
		{
			name: 'grid-template-areas',
			description: 'Names areas in the grid layout.',
			sampleUse: "grid-template-areas: 'header header' 'main sidebar';"
		},
		{
			name: 'grid-gap',
			description: 'Shorthand for gaps between grid cells.',
			sampleUse: 'grid-gap: 10px 20px;'
		},
		{
			name: 'grid-column-gap',
			description: 'Sets the gap between columns.',
			sampleUse: 'grid-column-gap: 15px;'
		},
		{
			name: 'grid-row-gap',
			description: 'Sets the gap between rows.',
			sampleUse: 'grid-row-gap: 10px;'
		},
		{
			name: 'grid-column',
			description: 'Shorthand for column placement.',
			sampleUse: 'grid-column: 1 / 3;'
		},
		{
			name: 'grid-row',
			description: 'Shorthand for row placement.',
			sampleUse: 'grid-row: 2 / 4;'
		},
		{
			name: 'grid-area',
			description: 'Shorthand for grid item placement.',
			sampleUse: 'grid-area: header;'
		},
		{
			name: 'justify-items',
			description: 'Aligns grid items along the inline axis.',
			sampleUse: 'justify-items: center;'
		},
		{
			name: 'align-items',
			description: 'Aligns grid items along the block axis.',
			sampleUse: 'align-items: stretch;'
		},
		{
			name: 'place-items',
			description: 'Shorthand for aligning grid items in both directions.',
			sampleUse: 'place-items: center stretch;'
		},
		{
			name: 'justify-content',
			description: 'Aligns the grid along the inline axis.',
			sampleUse: 'justify-content: space-around;'
		},
		{
			name: 'align-content',
			description: 'Aligns the grid along the block axis.',
			sampleUse: 'align-content: space-between;'
		}
	],

	positioningAndLayout: [
		{
			name: 'position',
			description: 'Defines the positioning method of an element.',
			sampleUse: 'position: absolute;'
		},
		{
			name: 'top',
			description: 'Sets the distance from the top edge for positioned elements.',
			sampleUse: 'top: 10px;'
		},
		{
			name: 'right',
			description: 'Sets the distance from the right edge.',
			sampleUse: 'right: 20px;'
		},
		{
			name: 'bottom',
			description: 'Sets the distance from the bottom edge.',
			sampleUse: 'bottom: 15px;'
		},
		{ name: 'left', description: 'Sets the distance from the left edge.', sampleUse: 'left: 5px;' },
		{
			name: 'z-index',
			description: 'Specifies the stack order of overlapping elements.',
			sampleUse: 'z-index: 100;'
		},
		{
			name: 'display',
			description: 'Controls the display type of an element.',
			sampleUse: 'display: flex;'
		},
		{
			name: 'float',
			description: 'Positions an element to the left or right, allowing content to wrap.',
			sampleUse: 'float: left;'
		},
		{
			name: 'clear',
			description: 'Specifies how an element interacts with floated elements.',
			sampleUse: 'clear: both;'
		},
		{
			name: 'visibility',
			description: 'Shows or hides an element without affecting layout.',
			sampleUse: 'visibility: hidden;'
		},
		{
			name: 'overflow',
			description: 'Defines what happens when content overflows an element’s box.',
			sampleUse: 'overflow: scroll;'
		},
		{
			name: 'overflow-x',
			description: 'Controls horizontal overflow.',
			sampleUse: 'overflow-x: hidden;'
		},
		{
			name: 'overflow-y',
			description: 'Controls vertical overflow.',
			sampleUse: 'overflow-y: auto;'
		}
	],

	typography: [
		{
			name: 'font',
			description: 'Shorthand for font properties.',
			sampleUse: 'font: italic 16px Arial;'
		},
		{
			name: 'font-family',
			description: 'Specifies the font typeface for text.',
			sampleUse: 'font-family: Arial, sans-serif;'
		},
		{ name: 'font-size', description: 'Sets the size of the text.', sampleUse: 'font-size: 16px;' },
		{
			name: 'font-weight',
			description: 'Sets the boldness of the text.',
			sampleUse: 'font-weight: bold;'
		},
		{
			name: 'font-style',
			description: 'Sets the style of the text.',
			sampleUse: 'font-style: italic;'
		},
		{
			name: 'font-variant',
			description: 'Controls small-caps or other font variants.',
			sampleUse: 'font-variant: small-caps;'
		},
		{
			name: 'line-height',
			description: 'Sets the height of a line of text.',
			sampleUse: 'line-height: 1.5;'
		},
		{
			name: 'text-align',
			description: 'Aligns text horizontally.',
			sampleUse: 'text-align: center;'
		},
		{
			name: 'text-decoration',
			description: 'Adds decoration to text.',
			sampleUse: 'text-decoration: underline;'
		},
		{
			name: 'text-transform',
			description: 'Changes text case.',
			sampleUse: 'text-transform: uppercase;'
		},
		{
			name: 'letter-spacing',
			description: 'Adjusts spacing between characters.',
			sampleUse: 'letter-spacing: 2px;'
		},
		{
			name: 'word-spacing',
			description: 'Adjusts spacing between words.',
			sampleUse: 'word-spacing: 5px;'
		},
		{
			name: 'white-space',
			description: 'Controls how whitespace is handled.',
			sampleUse: 'white-space: nowrap;'
		},
		{
			name: 'text-indent',
			description: 'Indents the first line of text.',
			sampleUse: 'text-indent: 20px;'
		},
		{
			name: 'text-overflow',
			description: 'Defines how overflowed text is displayed.',
			sampleUse: 'text-overflow: ellipsis;'
		},
		{ name: 'direction', description: 'Sets the text direction.', sampleUse: 'direction: rtl;' },
		{
			name: 'unicode-bidi',
			description: 'Controls bidirectional text rendering.',
			sampleUse: 'unicode-bidi: bidi-override;'
		}
	],

	colorAndBackground: [
		{
			name: 'color',
			description: 'Sets the text color of an element.',
			sampleUse: 'color: red;'
		},
		{
			name: 'background',
			description: 'Shorthand for background properties.',
			sampleUse: "background: #fff url('img.jpg') no-repeat;"
		},
		{
			name: 'background-color',
			description: 'Sets the background color of an element.',
			sampleUse: 'background-color: #f0f0f0;'
		},
		{
			name: 'background-image',
			description: 'Specifies an image to use as the background.',
			sampleUse: "background-image: url('image.jpg');"
		},
		{
			name: 'background-position',
			description: 'Positions the background image.',
			sampleUse: 'background-position: center top;'
		},
		{
			name: 'background-size',
			description: 'Sets the size of the background image.',
			sampleUse: 'background-size: cover;'
		},
		{
			name: 'background-repeat',
			description: 'Controls if/how the background image repeats.',
			sampleUse: 'background-repeat: no-repeat;'
		},
		{
			name: 'background-attachment',
			description: 'Defines whether the background scrolls with the content.',
			sampleUse: 'background-attachment: fixed;'
		},
		{
			name: 'background-clip',
			description: 'Specifies the painting area of the background.',
			sampleUse: 'background-clip: border-box;'
		},
		{
			name: 'background-origin',
			description: 'Determines the background positioning area.',
			sampleUse: 'background-origin: padding-box;'
		},
		{
			name: 'opacity',
			description: 'Sets the transparency level of an element (0 to 1).',
			sampleUse: 'opacity: 0.5;'
		}
	],

	transformsAndTransitions: [
		{
			name: 'transform',
			description: 'Applies 2D or 3D transformations.',
			sampleUse: 'transform: rotate(45deg);'
		},
		{
			name: 'transform-origin',
			description: 'Sets the origin point of a transformation.',
			sampleUse: 'transform-origin: top left;'
		},
		{
			name: 'transform-style',
			description: 'Defines how nested elements are rendered in 3D.',
			sampleUse: 'transform-style: preserve-3d;'
		},
		{
			name: 'perspective',
			description: 'Sets the 3D perspective for child elements.',
			sampleUse: 'perspective: 1000px;'
		},
		{
			name: 'transition',
			description: 'Shorthand for transition properties.',
			sampleUse: 'transition: all 0.3s ease;'
		},
		{
			name: 'transition-property',
			description: 'Specifies which properties to transition.',
			sampleUse: 'transition-property: opacity;'
		},
		{
			name: 'transition-duration',
			description: 'Sets the duration of a transition.',
			sampleUse: 'transition-duration: 0.5s;'
		},
		{
			name: 'transition-timing-function',
			description: 'Defines the speed curve of a transition.',
			sampleUse: 'transition-timing-function: ease-in-out;'
		},
		{
			name: 'transition-delay',
			description: 'Sets a delay before a transition starts.',
			sampleUse: 'transition-delay: 0.2s;'
		},
		{
			name: 'animation',
			description: 'Shorthand for animation properties.',
			sampleUse: 'animation: slide 2s infinite;'
		},
		{
			name: 'animation-name',
			description: 'Specifies the name of a keyframe animation.',
			sampleUse: 'animation-name: fade;'
		},
		{
			name: 'animation-duration',
			description: 'Sets the duration of an animation.',
			sampleUse: 'animation-duration: 1s;'
		},
		{
			name: 'animation-timing-function',
			description: 'Defines the speed curve of an animation.',
			sampleUse: 'animation-timing-function: linear;'
		},
		{
			name: 'animation-delay',
			description: 'Sets a delay before an animation starts.',
			sampleUse: 'animation-delay: 0.5s;'
		},
		{
			name: 'animation-iteration-count',
			description: 'Sets how many times an animation repeats.',
			sampleUse: 'animation-iteration-count: infinite;'
		},
		{
			name: 'animation-direction',
			description: 'Defines the direction of an animation.',
			sampleUse: 'animation-direction: alternate;'
		},
		{
			name: 'animation-fill-mode',
			description: 'Specifies how styles apply before/after animation.',
			sampleUse: 'animation-fill-mode: forwards;'
		}
	],

	miscellaneousAppearance: [
		{ name: 'cursor', description: 'Sets the mouse cursor style.', sampleUse: 'cursor: pointer;' },
		{
			name: 'outline',
			description: 'Shorthand for outline properties.',
			sampleUse: 'outline: 2px solid blue;'
		},
		{
			name: 'outline-width',
			description: 'Sets the thickness of an outline.',
			sampleUse: 'outline-width: 1px;'
		},
		{
			name: 'outline-style',
			description: 'Sets the style of an outline.',
			sampleUse: 'outline-style: dotted;'
		},
		{
			name: 'outline-color',
			description: 'Sets the color of an outline.',
			sampleUse: 'outline-color: green;'
		},
		{
			name: 'outline-offset',
			description: 'Sets the space between an outline and the element.',
			sampleUse: 'outline-offset: 5px;'
		},
		{
			name: 'box-shadow',
			description: 'Adds a shadow effect to an element.',
			sampleUse: 'box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);'
		},
		{
			name: 'text-shadow',
			description: 'Adds a shadow effect to text.',
			sampleUse: 'text-shadow: 1px 1px 2px gray;'
		},
		{
			name: 'filter',
			description: 'Applies graphical effects like blur or grayscale.',
			sampleUse: 'filter: blur(5px);'
		},
		{
			name: 'clip-path',
			description: 'Clips an element to a specific shape.',
			sampleUse: 'clip-path: circle(50%);'
		},
		{
			name: 'resize',
			description: 'Controls whether an element can be resized by the user.',
			sampleUse: 'resize: horizontal;'
		}
	],

	contentAndPseudoElements: [
		{
			name: 'content',
			description: 'Inserts content via pseudo-elements like ::before or ::after.',
			sampleUse: "content: '★';"
		},
		{
			name: 'quotes',
			description: 'Defines quotation marks for embedded quotes.',
			sampleUse: "quotes: '“' '”' '‘' '’';"
		},
		{
			name: 'counter-increment',
			description: 'Increments a CSS counter.',
			sampleUse: 'counter-increment: section;'
		},
		{
			name: 'counter-reset',
			description: 'Resets a CSS counter.',
			sampleUse: 'counter-reset: section;'
		}
	],

	other: [
		{
			name: 'all',
			description: 'Resets all properties to their initial or inherited values.',
			sampleUse: 'all: initial;'
		},
		{
			name: 'will-change',
			description: 'Hints to the browser about which properties will change.',
			sampleUse: 'will-change: transform;'
		},
		{
			name: 'pointer-events',
			description: 'Controls how an element responds to mouse events.',
			sampleUse: 'pointer-events: none;'
		},
		{
			name: 'user-select',
			description: 'Controls whether text can be selected by the user.',
			sampleUse: 'user-select: none;'
		},
		{
			name: 'appearance',
			description: 'Alters the default appearance of UI elements.',
			sampleUse: 'appearance: none;'
		}
	]
};

export default cssProperties;
