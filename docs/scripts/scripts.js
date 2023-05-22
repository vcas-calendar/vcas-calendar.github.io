// PC/モバイルレイアウトの切り替え
const header = document.getElementsByTagName('header')[0];
const details = header.getElementsByTagName('details')[0];
function switchLayout()
{
	details.open = getComputedStyle(header).backgroundImage !== 'none';
}
switchLayout();
addEventListener('resize', switchLayout);

// フォーム送信後にインラインフレームトップを表示
let formAlreadyLoaded = false;
document.body.addEventListener('load', function (event)
{
	if (event.target.localName !== 'iframe' || !event.target.src.startsWith('https://docs.google.com/forms/')) {
		return;
	}

	if (!formAlreadyLoaded) {
		formAlreadyLoaded = true;
		return;
	}

	event.target.scrollIntoView();
}, true);
