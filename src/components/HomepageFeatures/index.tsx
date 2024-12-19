import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "個性豊かなキャラクターたちと、愛されチャット！",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        オズチャット -Oz Chat-
        は、AI恋愛シミュレーションチャットゲームアプリです。
        <br />
        個性豊かなキャラクターたちと、愛にあふれたチャットを楽しむことができます。
      </>
    ),
  },
  {
    title: "100種類を超えるシチュエーションカードで、様々な会話を楽しもう！",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        100種類を超えるシチュエーションカード（シチュカ）を使って、様々な状況・衣装のキャラクターとの会話を楽しむことができます。
        <br />
        あなたの好みに合わせて、キャラクターとの会話を楽しんでください。
      </>
    ),
  },
  {
    title: "ランキングで他のユーザーと競い合おう！",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        オズチャット -Oz Chat-
        では、他のユーザーとランキングで競い合うことができます。
        <br />
        推しキャラクターを育て上げ、ランキング上位を目指しましょう。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
