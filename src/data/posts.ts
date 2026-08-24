export interface Post {
  id: number
  slug: string
  title: string
  subtitle: string
  description: string
  tag: string
  date: string
  readTime: string
  image: string
  heroImage: string
  color: string
  sections: Section[]
}

interface Section {
  heading?: string
  body: string
  image?: string
  imageAlt?: string
  imageCaption?: string
  code?: string
  source?: { label: string; url: string }
}

export const posts: Post[] = [
  {
    id: 1,
    slug: "Post 1",
    title: "O que você achava que veria na disciplina + O que você entendeu que estudaremos",
    subtitle: "",
    description: "",
    tag: "Post 1",
    date: "17 agosto, 2026",
    readTime: "5 min",
    image: "https://cdn.prod.website-files.com/61a51a6fff9085700039fcd8/63bc673c33fd7c7a6843246b_vis%C3%A3o%20computacional.png",
    heroImage: "",
    color: "#c8ff00",
    sections: [
      {
        heading: "O que eu achava que veria na disciplina",
        body: `

          Eu imaginei que seria algo envolvendo a GPU, como a geração e o processamento de cada pixel, incluindo a manipulação de imagens e o processo completo realizado pela GPU para gerar imagens.
        `,
      },
      {
        heading: "O que eu entendi que estudaremos",
        body: `

          Eu entendi que iremos abordar um pouco de cada um dos três temas principais: Computer Graphics, Image Processing e Computer Vision. Porém, o conteúdo será mais centralizado na interseção entre essas três áreas, sem um aprofundamento específico em apenas uma delas, como foi demonstrado em aula.
        `,
        image: `${import.meta.env.BASE_URL}venn-diagram.svg`,
        imageAlt: "Diagrama de Venn com três círculos: Computer Graphics, Image Processing e Computer Vision, com a intersecção central destacada",
        imageCaption: "A disciplina se concentra na intersecção entre Computer Graphics, Image Processing e Computer Vision.",
      },
    ],
  },
  {
    id: 2,
    slug: "Post 2",
    title: "Pixels, vetores e cores: como as imagens digitais são construídas",
    subtitle: "Um mergulho em RGB, CMYK, imagem matricial e imagem vetorial",
    description:
      "Um guia rápido sobre os dois principais modelos de cor, os formatos de imagem matricial e vetorial, e uma curiosidade sobre visão computacional.",
    tag: "Post 2",
    date: "24 agosto, 2026",
    readTime: "5 min",
    image: "https://cdn.prod.website-files.com/61a51a6fff9085700039fcd8/63bc673c33fd7c7a6843246b_vis%C3%A3o%20computacional.png",
    heroImage: "",
    color: "#ff6b35",
    sections: [
      {
        heading: "RGB vs CMYK",
        body: `RGB (Red, Green, Blue) é um modelo aditivo de cores usado em telas, câmeras e monitores. As cores nascem da luz: quanto mais você soma vermelho, verde e azul, mais perto do branco você chega.

CMYK (Cyan, Magenta, Yellow, Key/preto) é um modelo subtrativo, usado na impressão. Aqui as cores nascem da tinta sobre o papel: quanto mais você mistura, mais perto do preto você chega — por isso é essencial converter arquivos para CMYK antes de mandar para gráfica.`,
      },
      {
        heading: "Imagem matricial: exemplos de formatos",
        body: `Imagens matriciais (ou raster) são formadas por uma grade de pixels, cada um com sua própria cor. Por isso, ao ampliar demais, a imagem perde qualidade e fica "pixelada".

Os formatos mais comuns são JPEG (bom para fotos, com compressão), PNG (suporta transparência, ótimo para logos e gráficos web) e GIF (suporta animações simples). Também vale citar o TIFF, muito usado em impressão profissional por preservar alta qualidade sem perdas.`,
      },
      {
        heading: "Imagem vetorial: exemplos de formatos",
        body: `Imagens vetoriais são construídas com fórmulas matemáticas — pontos, linhas e curvas — em vez de pixels fixos. Isso significa que podem ser ampliadas infinitamente sem perder nitidez, o que as torna ideais para logotipos e ícones.

Os formatos mais usados são SVG (padrão para web, leve e editável em código), AI (arquivo nativo do Adobe Illustrator) e EPS (formato tradicional para impressão e design gráfico). Diferente do raster, o tamanho do arquivo vetorial depende da complexidade do desenho, não da resolução.`,
      },
      {
        heading: "Uma curiosidade",
        body: `Você sabia que o olho humano é mais sensível à cor verde do que ao vermelho ou ao azul? É por isso que, em muitos formatos de compressão de imagem e vídeo (como o JPEG), o canal verde recebe mais bits de informação do que os outros dois.

Esse mesmo princípio é usado em sensores de câmeras digitais, que costumam ter o dobro de pixels sensíveis ao verde em comparação ao vermelho e ao azul — um arranjo conhecido como filtro de Bayer. Ou seja: sua câmera "enxerga" o verde melhor porque seus olhos também enxergam!`,
        source: { label: "Bayer filter — Wikipedia", url: "https://en.wikipedia.org/wiki/Bayer_filter" },
      },
    ],
  },
  {
    id: 3,
    slug: "Post 3",
    title: "????",
    subtitle: "",
    description: "",
    tag: "Post 3",
    date: "?? ??, 2026",
    readTime: "5 min",
    image: "https://cdn.prod.website-files.com/61a51a6fff9085700039fcd8/63bc673c33fd7c7a6843246b_vis%C3%A3o%20computacional.png",
    heroImage: "",
    color: "#a78bfa",
    sections: [
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
    ],
  },
  {
    id: 4,
    slug: "Post 4",
    title: "????",
    subtitle: "",
    description: "",
    tag: "Post 4",
    date: "?? ??, 2026",
    readTime: "5 min",
    image: "https://cdn.prod.website-files.com/61a51a6fff9085700039fcd8/63bc673c33fd7c7a6843246b_vis%C3%A3o%20computacional.png",
    heroImage: "",
    color: "#f472b6",
    sections: [
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
    ],
  },
  {
    id: 5,
    slug: "Post 5",
    title: "????",
    subtitle: "",
    description: "",
    tag: "Post 5",
    date: "?? ??, 2026",
    readTime: "5 min",
    image: "https://cdn.prod.website-files.com/61a51a6fff9085700039fcd8/63bc673c33fd7c7a6843246b_vis%C3%A3o%20computacional.png",
    heroImage: "",
    color: "#22d3ee",
    sections: [
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
    ],
  },
  {
    id: 6,
    slug: "Post 6",
    title: "????",
    subtitle: "",
    description: "",
    tag: "Post 6",
    date: "?? ??, 2026",
    readTime: "5 min",
    image: "https://cdn.prod.website-files.com/61a51a6fff9085700039fcd8/63bc673c33fd7c7a6843246b_vis%C3%A3o%20computacional.png",
    heroImage: "",
    color: "#34d399",
    sections: [
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
    ],
  },
  {
    id: 7,
    slug: "Post 7",
    title: "????",
    subtitle: "",
    description: "",
    tag: "Post 7",
    date: "?? ??, 2026",
    readTime: "5 min",
    image: "https://cdn.prod.website-files.com/61a51a6fff9085700039fcd8/63bc673c33fd7c7a6843246b_vis%C3%A3o%20computacional.png",
    heroImage: "",
    color: "#fb923c",
    sections: [
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
    ],
  },
  {
    id: 8,
    slug: "Post 8",
    title: "????",
    subtitle: "",
    description: "",
    tag: "Post 8",
    date: "?? ??, 2026",
    readTime: "5 min",
    image: "https://cdn.prod.website-files.com/61a51a6fff9085700039fcd8/63bc673c33fd7c7a6843246b_vis%C3%A3o%20computacional.png",
    heroImage: "",
    color: "#818cf8",
    sections: [
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
      {
        heading: "????",
        body: `
          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________

          ____________________________________________________________
        `,
      },
    ],
  },
]
