import styled from 'preact-emotion';

const FooterHolder = styled('div')`
margin-top:50px;
    width:100%
    height:100px;
    display:flex;
    justify-content: center;
`;

const IconHolder = styled('div')`
	padding: 50px 5px 50px 5px;
	display: inline-block;
	margin-left: auto;
	margin-right: auto;
`;

export default { IconHolder, FooterHolder };
