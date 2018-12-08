import { h } from 'preact';
import styled from './style';
import { Link } from 'preact-router/match';
import Project from '../../components/project';

const Home = () => (
	<div>
		<styled.Holder>
			<styled.Image
				alt="Profile picture"
				src="../../assets/images/profile.png"
			/>
			<styled.HeaderName>Ivo Kroon</styled.HeaderName>
			<styled.Study>Creative developer</styled.Study>
			<styled.Paragraph>
				Hallo! Ik ben Ivo Kroon, een creatieve technoloog die ambities heeft om
				een entrepreneur te worden. Ik houd ervan om bezig te zijn web
				gerelateerde projecten. Momenteel ben ik bezig met het opstarten van een
				startup, maar ook met nieuwe technieken zoals de voice assistants van
				Google (Google home) en Amazon (Alexa). Naast het web houd ik ook van
				reizen en sporten.
			</styled.Paragraph>
			<styled.Header>Projecten</styled.Header>
			<styled.ProjectHolder>
				<Link href="/projects/circle">
					<Project
						color="#6A64FD"
						title="Circle"
						image="../../assets/logos/circle.png"
						desc="buren hulp app"
					/>
				</Link>
				<Link href="/projects/helpert">
					<Project
						color="#061456"
						title="Helpert"
						image="../../assets/logos/helpert.png"
						desc="buren hulp app"
					/>
				</Link>
				<Link href="/projects/beetle">
					<Project
						color="#0078ff"
						title="Beetle"
						image="../../assets/logos/beetle.png"
						desc="buren hulp app"
					/>
				</Link>
			</styled.ProjectHolder>
		</styled.Holder>
	</div>
);

export default Home;
