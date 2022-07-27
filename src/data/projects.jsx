import defaultImg from '../img/noImage.png'
import pImg1 from '../img/projectImg/01.png'
import pImg2 from '../img/projectImg/02.png'
import pImg3 from '../img/projectImg/03.png'
import pImg4 from '../img/projectImg/04.png'
import pImg5 from '../img/projectImg/05.png'
import pImg6 from '../img/projectImg/06.png'
import pImg7 from '../img/projectImg/07.png'

export const pItems = [
  {
    index: '1',
    rf: pImg1,
    ptitle: '初期ユーザー向け移行サポート機能の開発',
    ptag1: '受容性評価',
    ptag2: 'ワークショップ',
    ptag3: 'UIデザイン',
    pcaption:
      '初期ユーザーサポート機能開発。過去の開発で一定のユーザー課題を改善し数値は向上していたものの、一部に改善の余地があった。CS、Engを含めたプロジェクトメンバーでのユーザーストーリーマッピングを実施して体験を設計。受容性の評価やユーザビリティテストを経て、機能をデザインした。',
    point1:
      'CSやPdM、Engをまじえたワークショップを経て理想的な体験について目線を合わせた上で設計を進めた。',
    point2:
      'オブジェクト指向UIデザインの考え方をもとに、オブジェクト・ビュー・プレゼンテーションを考えながらUIをデザイン。',
    duration: '3ヶ月（2022/1 - 2022/3）',
    member: 'PdM1名、CS1名、Eng2名',
  },
  {
    index: '2',
    rf: pImg2,
    ptitle: '初期ユーザー向けセットアップガイドの開発',
    ptag1: 'UIデザイン',
    ptag2: 'ユーザーインタビュー',
    ptag3: 'ワークショップ',
    pcaption:
      '初期ユーザーの利用率に課題があり、初期利用率の改善を目標としたプロジェクト。プロダクトのオンボーディングを進めるためのチェックリストをCSメンバーと設計し、プロダクト上に設置。リリース後は、初期利用の数値が前年度比1.5倍程度に改善した。',
    point1:
      'オンボーディングという領域はテスト環境での検証が難しいため、リリース後のリサーチを重視してプロジェクトのプロセスを設計。',
    point2: 'リリース後のインタビューによりさらなる体験改善の開発をデザイン',
    duration: '5ヶ月（2021/6 - 2021/10）',
    member: 'PdM1名、CS1名、Eng2名',
  },
  {
    index: '3',
    rf: pImg3,
    ptitle: 'デザインチームでの定期リサーチの定着',
    ptag1: 'プロセス設計',
    ptag2: 'ユーザーテスト',
    ptag3: 'ユーザーインタビュー',
    pcaption:
      '新たに所属したチームではリサーチが思うように実施できていない状況だった。そこで負担が少なくチーム内でリサーチができる「定期リサーチの仕組み」を提案、実施した。毎月定期的にリリース前の機能に関するユーザビリティ上の課題を把握できるようになり、品質向上につながった。さらにチーム内ではユーザー理解の向上にも寄与した。',
    point1:
      'チームの負荷と効果のバランスを考えて「1ヶ月」単位という区切りでリサーチを実施する計画にした。',
    point2:
      'チームメンバーのリサーチ経験が少なかったため、プロセスや考え方をレクチャーしながら進めた。3ヶ月後にはメンバー全員がリサーチを実施できるまでに成長した。',
    duration: '10ヶ月（2021/6 - 2022/3）※現在も継続中',
    member: 'デザイナー4名、リサーチOps1名',
  },
  {
    index: '4',
    rf: pImg4,
    ptitle: '給与計算機能の新規デザイン',
    ptag1: 'UIデザイン',
    ptag2: 'ユーザーインタビュー',
    ptag3: 'ユーザーテスト',
    pcaption:
      '給与計算モジュールにおいて、給与計算の過程を可視化する体験をPdMと一緒に設計した。給与計算という複雑なドメインでパターン数も膨大だったため、PdMとのペアデザインやデザインコンポーネントのパターン化などを行い、デザインを制作した。',
    point1:
      '提供しようとしていた体験の表示パターンが100を超えたため、デザインのパターンを整理して、一定のルールを作成。作成したルールに則りUIを設計することで、開発を効率化',
    point2:
      '深いドメイン知識が必要だったため、PdMとペアデザインを実施してスムーズにデザインを制作',
    duration: '4ヶ月（2021/8 - 2021/11）',
    member: 'PdM1名、Eng4名',
  },
  {
    index: '5',
    rf: pImg5,
    ptitle: 'リサーチチームの立ち上げ',
    ptag1: 'プロセス設計',
    ptag2: 'ユーザーインタビュー',
    ptag3: 'ユーザーテスト',
    pcaption:
      '社内にリサーチの重要性が認知され、リサーチの需要が急増したため、新たにリサーチ組織を組成することとなった。リサーチプロセスの整備やメンバーへのサポートを実施し、自身でもリサーチプロジェクトのオーナーを担当した。普及活動により、リサーチによってインサイトを得ながら企画・機能を創出していくという文化が定着した。',
    point1:
      'プロダクト開発のリサーチは、PdMやデザイナー自身がリサーチの中で見つけるインサイトが重要だと考え、委託型ではなく、だれもがリサーチできるように環境を整備していった。',
    point2:
      '定期的な講習や初回のリサーチの伴走、壁打ちなどを実施することで、リサーチできるメンバーを増やしていった。',
    duration: '1年10ヶ月（2019/7 - 2021/3）',
    member: 'リサーチャー2名、リサーチOps1名',
  },
  {
    index: '6',
    rf: pImg6,
    ptitle: '新規モジュールの受容性リサーチ',
    ptag1: 'ユーザーインタビュー',
    ptag2: 'プロトタイピング',
    ptag3: 'アンケート',
    pcaption:
      'ユーザー数増加を目標にした新規モジュールの企画の検証プロジェクト。ユーザーインタビューやUIプロトタイプの製作、ユーザーテストを実施して、企画中の内容が目標にたりうる企画かを検証した。リサーチの結果、当初掲げていたユーザー数増加にはつながりづらいと判断し開発を一時凍結。別の企画に開発リソースを回すという決断をとった。',
    point1:
      '開発投資のGo/NoGoという判断するために、ユーザーリサーチによる定性調査と、市場調査やアンケートの定量調査の両方を実施',
    point2:
      '受容性の評価ではユーザーがイメージできるよう、デザインでプロトタイプを作成した',
    duration: '3ヶ月（2019/7 - 2019/9）',
    member: 'PdM1名',
  },
  {
    index: '7',
    rf: pImg7,
    ptitle: 'プロダクト戦略チームへのリサーチ導入',
    ptag1: 'リサーチプロセスの設計',
    ptag2: 'ユーザーインタビュー',
    ptag3: 'ユーザーテスト',
    pcaption:
      '入社当時は社内にリサーチの習慣がなく、仮説ベースで機能や体験の設計が行われている状況だった。そこでユーザビリティテストのテンプレート作成や講習を実施して、社内にリサーチを実施できる仕組みを整えた。その結果、リサーチの重要性が組織で理解され、リサーチチーム立ち上げにつながった。',
    point1:
      'リサーチは一度経験することで、以降の実施ハードルが下がると考え、講義や伴走による初回のリサーチを手厚くサポートした。',
    point2:
      'リサーチのレベルを段階的に上げていく。最初は実施のプロセスを、徐々にアスキングのレベルを上げるためのFBを入れるなどして、段階を踏みながら組織にリサーチをインプットしていった。',
    duration: '1年（2019/7 - 2020/6）',
    member: 'リサーチャー2名',
  },
]
