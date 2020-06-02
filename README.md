# UI

## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### -----structure-----
	**@ -> redirect on ./src/**
	./src/assets/ - css / scss styles
	./src/components/ - default UI componets
	./src/pages/ - pages of APP
	./src/comples/ - special UI component for your APP


### -----components-----

	- **####button**
		-props:
			- title
					type: String
				  text in the button
			-	reverse
					type: Boolean
					**unused**
			-	icon
					type: String
					icon in the button
					variables: photo, password, filter, distantion, next
			-	float
					type: String
					icon without text
					variables: right, next, arrows, close, menu, account
			-	bg
					type: String
					custom bg color
					variables: any color
			-	color
					type: String
					custom font color
					variables: any color
			-	disabled
					type: Boolean
					disable button event
			-	load
					type: Number
					disable and start loading icon into button
					variables: 1 - dots 2 - loader
		- classes:
			- dark
			- invisible
			- dash
			- text
			- down
		- emit:
			@click - true

	- **####check-box**
		-props:
			- value
					type: Boolean
		- classes:
			- transparent
		- emit:
			@click - !value

	- **####date-select**
		in progress

	- **####date**
		-props:
			- value
					type: Date
		- classes:
		- emit:
			@click - new Date(current_date)

	- **####dot-loader**
		-props:
		- classes:
		- emit:

	- **####input**
		-props:
			- type
					type: String
			-	id
					type: Number, String
			-	load
					type: Boolean
					**unused**
			-	placeholder
					type: String
			-	position
					type: String
					position placeholder
					variables: none, under, border
			-	value
					type: String
					default: ''
			-	validate
					type: Boolean
			-	length
					type: Number, String
					min length for value
			-	icon
					type: String
					variables: email, location, tenge 
			-	icon_position
					type: String
					variables: right - if icon = tenge, else use left
			-	errno
					type: String
					message for error
		- classes:
			- bottom
		- emit:
			@keyup - value

	- **####min-loader**
		-props:
			- title
					type: String
		- classes:
		- emit:

	- **####multi-select**
		in progress

	- **####pagination**
		-props:
			- value
					type: Number
					current page
			-	max
					type: Number
					maximum pages
			-	unlimited
					type: Boolean
					use for dor / dash / if you have show all pages
		- classes:
			- dot
			- dash
		- emit:
			@click - curent page

	- **####progress-bar**
		-props:
			- percent
					type: Number
					percent of load
			-	title
					type: String
		- classes:
		- emit:

	- **####radio**
		-props:
			- value
					type: Boolean
			- title
					type: String
			- transparent
					type: Boolean
					transparent class
		- classes:
		- emit:
			@click - !value

	- **####scroll**
		**unused**

	- **####search-bar**
		-props:
			-	id
					type: Number, String
			-	placeholder
					type: String
			-	value
					type: String
					default: ''
			-	validate
					type: Boolean
			-	length
					type: Number, String
					min length for value
			-	childs
					type: Array
					search list
			- child_name
				type: String
				title name in child
		- classes:
		- emit:
			@click - value
			@keyup - value

	- **####segmented**
		-props:
			- value
					type: Number
					curent index child
			-	childs
					type: Array
			-	child_name
					type: String
					title name in child
			-	child_svg
					type: String
					svg name in child
		- classes:
			- reverse
			- divided
		- emit:
			@click - value

	- **####select**
		-props:
			-	id
					type: Number, String
			-	placeholder
					type: String
			-	value
					type: String
			-	validate
					type: Boolean
			-	length
					type: Number, String
					min length for value
			-	icon
					type: String
					**unused**
			-	icon_position
					type: String
					variables: right, left
					**unused**
			-	childs
					type: Array
			-	child_name
					type: String
					title name in child
		- classes:
		- emit:
			@click - !value

	- **####selector**
		-props:
			- value
					type: Boolean
			- transparent
					type: Boolean
					transparent class
		- classes:
		- emit:
			@click - !value

	- **####sidebar**
		**unused**

	- **####slider**
		-props:
			- start
					type: Number
					start value
			-	end
					type: Number
					end value
			-	min
					type: Number, String
					default: 0
			-	max
					type: Number, String
					default: 100
			-	value
					type: Object
			-	ranged
					type: Boolean
					added start value
		- classes:
		- emit:
			@change - { end , ranged ? start}

	- **####stepped**
		-props:
			- value
					type: Number
			-	min
					type: Number
			-	max
					type: Number
			-	step
					type: Number
		- classes:
			- light
		- emit:
			@click - value +-step

	- **####switch**
		-props:
			- value
					type: Boolean
		- classes:
		- emit:
			@click - !value

	- **####tage**
		-props:
			- title
					type: String
		- classes:
			- close
			- reverse
			- close-reverse
		- emit:
			close@click - true

	
### -----stylys-----
	For check global styles open file ./src/assets/main.scss.

	All div have display **flex**.

	row / col for direction flex.
	justify-content: **j-center j-end j-start j-sb j-arround**.
	align-items: **a-center a-end a-start**.

	Grid: .xs-[i]
		** - xs - 600 > 0**
		** - sm - 960 > 601**
		** - md - 1264 > 961**
		** - lg - 1904 > 1265**
		** - xl - Infinite > 1905**

	You have **0 - 100** styles for width(w_examplevalue / min.. / ..max), height(h_examplevalue / min.. / ..max), padding(p_examplevalue / p-(b/t/l/r)_examplevalue), matgin(m_examplevalue / m-(b/t/l/r)_examplevalue).

	For use custom sizes or colors change file **./src/assets/sizes.scss**.
	Example: 
					- sizes._40rem -> h_40rem (height: 40rm) sizes corresponds to ^.
					- colors._error -> bcolor_error (border-color: var(--error)) color have color_error(color), bcolor_error(border-colro), bgcolor_error(background-color).


### -----color_sсheme-----
  Projectc may have 1 or more color sсheme.
  For create color sсheme create **example_sсheme.css** into ./src/assets/ folder.
  Copy default sheme and will be change on your preferences.
  For switch theme into page you should be send 'example_sсheme' how **this.$emit('theme', 'example_sсheme')**.
  Current scheme keeping in local storage with name 'theme'.


### -----functions $f-----
  To find out functions list press **this.$f.help()** in your vue code and in browser console shows global functions list.
  To find out more about interesting function press **this.$f['exampleFunctionName'].help()** and check browser console.

