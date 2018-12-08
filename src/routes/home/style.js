import styled from 'preact-emotion';

const Holder = styled('div')`
	width: 100%;
	max-width: 750px;
	height: 100%;
	margin-left: auto;
	margin-right: auto;
	padding-left: 30px;
	padding-right: 30px;
`;
const Footer = styled('div')`
	widht: 100%;
	height: 100px;
`;

const Image = styled('img')`
	display: block;
	height: 160px;
	width: 160px;
	border-radius: 50%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 40px;
`;

const HeaderName = styled('h1')`
	text-align: center;
	margin-top: 20px;
	font-size: 34px;
`;

const Header = styled('h1')`
	text-align: left;
	margin-top: 40px;
`;

const Study = styled('h2')`
	font-weight: normal;
	font-size: 18px;
	font-style: italic;
	text-align: center;
`;

const Paragraph = styled('p')`
	margin-top: 20px;
	margin-left: auto;
	margin-right: auto;
	font-size: 18px;
	text-align: left;
	max-width: 750px;
`;

const ProjectHolder = styled('div')`
	margin-top: 20px;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export default {
	ProjectHolder,
	HeaderName,
	Header,
	Study,
	Paragraph,
	Image,
	Holder,
	Footer
};
