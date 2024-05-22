# Shipment Tracker

## Notes

- Internationalization Implemented.
- Data fetching implemented.
- Custom table component was implemented which allows advanced features
- added loader and simple error handling
- Slider still needs some work.
- Responsivity still needs some work.

## How to use

- Replace the shipment number in the url with needed number.

- You can use one of the numbers provided 84043113, 3468570, 40106705

## Main Libraries used

### react-i18next

For internationalization.

### react query

For handling server data.
Didn't use context or redux as there's isn't globally needed local state.

### antd steps component

- For creating shipment tracker steps
- (note) antd supports tree shaking, so even thought the steps component is `directly imported  like this import { Steps } from 'antd'` it antd will remove all the unused js.
