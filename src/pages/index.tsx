import { NextPage } from 'next'
import Head from 'next/head'
import { Link, Element } from 'react-scroll'
import { Container } from '../components/Container'
import { Content } from '../components/Content'
import { Section } from '../components/Section'
import { SectionContent } from '../components/SectionContent'
import { SectionTitle } from '../components/SectionTitle'
import { Toolbar } from '../components/Toolbar'
import { ToolbarItem } from '../components/ToolbarItem'
import { ToolbarLogo } from '../components/ToolbarLogo'
// import { MemberCard } from '../components/MemberCard'
// import { Member } from '../types/Member'

const NavBar = () => (
  <Toolbar>
    <ToolbarLogo>
      <img src="yandereca.svg" height="24px" />
    </ToolbarLogo>
    <ToolbarItem>
      <Link to="about" className="page-link" href="#about" smooth>
        Yanderecaについて
      </Link>
      <Link to="products" className="page-link" href="#products" smooth>
        プロダクト
      </Link>
      {/* <Link to="about" className="page-link" href="#members" smooth>
        メンバー
      </Link> */}
    </ToolbarItem>
  </Toolbar>
)

const Top = () => (
  <>
    <Content height="calc(100vh - 80px)">
      <Content align="center" justify="center" height="80%" fullWidth>
        <img className="yandereca-logo" src="yandereca.svg" />
        <h2>Yanderecaの使命はヤンデレと技術で生活を豊かにすることです。</h2>
      </Content>
    </Content>

    <style jsx>{`
      .yandereca-logo {
        max-width: 900px;
        width: 100%;
      }
    `}</style>
  </>
)

const About = () => (
  <Content align="center">
    <Section>
      <SectionTitle>Yanderecaについて</SectionTitle>
      <SectionContent>
        幸せな理想を現実に出来る世界を作る 「理想 vs 現実」
        <br />
        そのギャップに苦しんでいませんか？
        <br />
        もし、その現実が存在しなければ私たちは今の生活に幸せを感じるのではないか。
        <br />
        理想と現実のギャップに苦しむ姿をこれ以上見たくない。
        <br />
        そんな思いを胸に私たちは今の現実を幸せに感じられるソリューションをご提案します。
      </SectionContent>
      <SectionContent>
        私たちは「やりたいこと」と「やらなければならないこと」が選択可能な状況である時に生じる心の苦しみを課題に捉えています。
        <br />
        この課題を解決する1つの方法がこの2つが選択肢のテーブルに乗らない状態を作り出すことであると考えました。これを実現するためにはあるタイミングで「やりたいこと」が存在しない状態を作る必要があります。
        <br />
        そこで、私たちは身近な「やりたいこと」をタスクの進捗率に応じて取り除いていくソフトウェアという概念にたどり着きました。例えば「Youtubeを見たい」というやりたいことに対しては、任意の動画のURLをプラグインで書き換えることで解決することが出来ます。
        <br />
        これに味付けをして、病的に使用者を愛するソフトウェアが主のために様々な状態変数を参照してタスクの消化へと導く「ヤンデレ化したソフトウェア」を開発するに至りました。
        <br />
        そのコンセプトとして、私たちのチームは「Yandereca
        <br />
        Technology」と題して現在Yanderetterを開発しています。今後は基幹技術の基盤を整えて様々なソフトウェアをヤンデレ化させるための技術開発を行っていきます。
      </SectionContent>
    </Section>
  </Content>
)

const Products = () => (
  <>
    <Content align="center">
      <Section>
        <SectionTitle>プロダクト</SectionTitle>
        <SectionContent align="center">
          Yanderecaはユーザのタスク進捗率に応じて
          <br />
          SNSにヤンデレちゃんがメッセージを表示する
          <br />
          ブラウザ拡張機能の開発を行っています。
        </SectionContent>
        <img
          className="web-ext-model"
          src="web-ext-model.svg"
          alt="ブラウザ拡張機能のモデル図"
        />
      </Section>
    </Content>

    <style jsx>{`
      .web-ext-model {
        max-width: 800px;
        width: 100%;
      }
    `}</style>
  </>
)

// const Members = () => {
//   const members: Member[] = []

//   return (
//     <>
//       <Content align="center" fullWidth>
//         <SectionTitle>メンバー</SectionTitle>
//         <div className="members">
//           {members.map((m) => (
//             <MemberCard key={m.name} member={m} />
//           ))}
//         </div>
//       </Content>
//     </>
//   )
// }

/**
 * HomePage component.
 */
export const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>home - yandereca.tech</title>
      </Head>

      <NavBar />

      <Container>
        <Element className="section-root" id="top" name="top">
          <Top />
        </Element>
        <Element className="section-root" name="about">
          <About />
        </Element>
        <Element className="section-root" name="products">
          <Products />
        </Element>
        {/* <Element className="section-root" name="members">
          <Members />
        </Element> */}
      </Container>

      <style global jsx>{`
        .section-root {
          width: 100%;

          display: flex;
          align-items: center;
          flex-flow: column;
        }
      `}</style>
    </>
  )
}

export default HomePage
