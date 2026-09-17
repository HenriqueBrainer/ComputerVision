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
  imageContain?: boolean
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
    title: "Transformações de Intensidade: o ABC do processamento digital de imagens",
    subtitle: "Como contraste, negativo e correção gama nascem de uma única equação: s = T(r)",
    description:
      "Um resumo sobre as transformações de intensidade no domínio espacial: negativo, log, potência (gama) e as transformações lineares definidas por partes.",
    tag: "Post 3",
    date: "02 setembro, 2026",
    readTime: "6 min",
    image: "https://cdn.prod.website-files.com/61a51a6fff9085700039fcd8/63bc673c33fd7c7a6843246b_vis%C3%A3o%20computacional.png",
    heroImage: "",
    color: "#a78bfa",
    sections: [
      {
        heading: "O que são transformações de intensidade?",
        body: `Se você já mexeu em qualquer editor de imagens e brincou com contraste, brilho ou aquele efeito "negativo", você já usou — sem saber — uma **transformação de intensidade**.

No processamento digital de imagens, essas operações acontecem no **domínio espacial**, ou seja, diretamente sobre os pixels. Elas atuam **pixel a pixel**, sem olhar para os vizinhos (diferente da filtragem espacial, que considera a vizinhança de cada pixel). Matematicamente, toda transformação de intensidade é descrita pela equação **s = T(r)**, onde r é a intensidade do pixel de entrada, s é a intensidade de saída, e T é a função de transformação aplicada.`,
      },
      {
        heading: "Transformações lineares: identidade e negativo",
        body: `As mais simples de todas. A **identidade** simplesmente devolve a imagem de entrada sem alterações — não faz nada, na prática.

Já o **negativo** inverte os tons da imagem, calculado por **s = (L-1) - r**, onde L é a intensidade máxima. É o clássico "negativo fotográfico", muito usado em radiologia: ele realça detalhes brancos ou cinza escondidos em regiões escuras, o que é especialmente útil em mamografias e outras imagens médicas onde as áreas escuras dominam.`,
        image: `${import.meta.env.BASE_URL}curva-negativo.svg`,
        imageAlt: "Gráfico comparando a função identidade com a função de negativo s = (L-1) - r, e uma barra de gradiente mostrando a inversão dos tons de cinza",
        imageCaption: "O negativo espelha cada tom de cinza em torno do ponto médio da escala de intensidades.",
      },
      {
        heading: "Transformações logarítmicas",
        body: `Dadas por **s = c·log(1+r)**, essas transformações **expandem os tons escuros** e **comprimem os tons claros** de uma imagem. Na prática, isso "estica" os níveis de cinza mais escuros, revelando detalhes que antes ficavam escondidos nas sombras, enquanto os tons mais claros são comprimidos para não "estourarem" em branco puro.

Um uso clássico é na visualização do **espectro de Fourier**, onde os valores de intensidade podem variar de 0 a mais de um milhão. Sem o ajuste logarítmico, apenas os pixels mais claros dominariam a exibição em uma tela de 8 bits, escondendo todo o resto do espectro.`,
      },
      {
        heading: "Transformações de potência (gama)",
        body: `Definidas por **s = c·r^γ**, o parâmetro **gama (γ)** é o protagonista aqui — ele determina a forma da curva e se a imagem final ficará mais clara ou mais escura.

Quando **γ < 1**, a transformação clareia a imagem, realçando detalhes em regiões escuras — ótimo para fotos escuras ou de baixo contraste. Quando **γ > 1**, o efeito é o oposto: a imagem escurece, realçando detalhes nas regiões claras — ideal para imagens "lavadas" ou com excesso de brilho. Essa é justamente a lógica por trás da **correção gama**, usada em monitores e dispositivos de captura (normalmente com expoentes entre 1,8 e 2,5) para exibir as cores com exatidão.`,
        image: `${import.meta.env.BASE_URL}curva-gama.svg`,
        imageAlt: "Gráfico com duas curvas de transformação de potência: gama menor que 1, que clareia sombras, e gama maior que 1, que escurece luzes, comparadas com a reta identidade",
        imageCaption: "Curvas de potência s = c·r^γ para diferentes valores de gama, comparadas à identidade (γ = 1).",
      },
      {
        heading: "Transformações lineares definidas por partes",
        body: `Quando as funções acima não dão conta do recado, entram as **transformações definidas por partes**: mais flexíveis, porém exigindo mais parâmetros do usuário. As três principais são:

**Alargamento de contraste**: espalha os níveis de cinza de uma imagem de baixo contraste (causada, por exemplo, por iluminação ruim) por toda a faixa disponível, revelando mais detalhes.

**Fatiamento de níveis de intensidade**: realça uma faixa específica de tons — usado para destacar massas de água em imagens de satélite, falhas em raio X ou vasos sanguíneos em angiogramas.

**Fatiamento por planos de bits**: como cada pixel de 8 bits é formado por 8 "camadas" binárias (do bit menos ao mais significativo), é possível isolar essas camadas individualmente. Essa técnica é usada, por exemplo, na compressão de imagens, reconstruindo a imagem em escala de cinza a partir apenas dos planos mais significativos.`,
        image: `${import.meta.env.BASE_URL}planos-de-bits.svg`,
        imageAlt: "Diagrama de oito planos de bits empilhados, do plano 1 (menos significativo, mais ruidoso) ao plano 8 (mais significativo, mais estruturado)",
        imageCaption: "Um pixel de 8 bits pode ser decomposto em 8 planos binários — os mais significativos concentram a maior parte da informação visual.",
      },
    ],
  },
  {
    id: 4,
    slug: "Post 4",
    title: "Filtragem espacial e detecção de bordas: ensinando o computador a enxergar contorno",
    subtitle: "Do kernel que passeia pixel a pixel até o detector de Canny — com uma parada obrigatória no ruído",
    description:
      "Como funcionam os filtros espaciais (passa-baixa e passa-alta), a diferença entre correlação e convolução, e o caminho das derivadas até o detector de bordas de Canny.",
    tag: "Post 4",
    date: "09 setembro, 2026",
    readTime: "8 min",
    image: "https://cdn.prod.website-files.com/61a51a6fff9085700039fcd8/63bc673c33fd7c7a6843246b_vis%C3%A3o%20computacional.png",
    heroImage: "",
    color: "#f472b6",
    sections: [
      {
        heading: "Filtragem espacial: o filtro que passeia pela imagem",
        body: `Até agora, nas transformações de intensidade, cada pixel era tratado como se vivesse sozinho: pegava seu valor, aplicava uma função, pronto. A **filtragem espacial** muda a regra do jogo — aqui o pixel precisa **conversar com a vizinhança**.

A ideia é simples: você define uma pequena matriz (que atende por vários nomes — **máscara**, **kernel**, **janela** ou **template**), encosta ela em cima de um pedaço da imagem, multiplica elemento a elemento, soma tudo e joga o resultado no pixel do centro. Aí desliza o filtro um pixel para o lado e repete. E de novo. E de novo, até cobrir a imagem inteira.

Detalhe importante: a **imagem original nunca é modificada**. Cada pixel filtrado vai para uma imagem nova, senão o resultado de um pixel contaminaria o cálculo do seguinte.`,
        image: "https://media1.tenor.com/m/GXqGilvoSIMAAAAd/dog-hand-moment.gif",
        imageAlt: "GIF de um cachorro dando a pata para uma mão estendida",
        imageContain: true,
      },
      {
        heading: "Passa-baixa e passa-alta: quem entra na festa",
        body: `Filtrar, na prática, é **aceitar ou rejeitar certas frequências** da imagem. E os filtros se dividem em dois times:

**Passa-baixa**: aceitam as baixas frequências e barram as altas. Resultado? Reduzem ruído, conectam pequenas descontinuidades e — o efeito colateral mais famoso — **borram a imagem** (o bom e velho blur).

**Passa-alta**: fazem o oposto, deixando passar justamente as variações bruscas. Servem para **realçar detalhes**: bordas, linhas, curvas, manchas.

Guarde essa divisão, porque o resto do post é basicamente uma briga entre esses dois times: primeiro a gente suaviza (passa-baixa), depois a gente realça (passa-alta). E, spoiler, fazer na ordem errada dá problema.`,
      },
      {
        heading: "Correlação vs convolução: a pegadinha dos 180 graus",
        body: `Aquele processo que descrevi lá em cima — deslizar, multiplicar, somar — tecnicamente **não é convolução**. É **correlação**. Ela mede o quanto uma região da imagem "se parece" com o kernel, funcionando como um detector de padrões.

A **convolução** tem um passo extra no começo: o kernel é **rotacionado em 180 graus** (inverte na horizontal, depois na vertical) antes de tudo. Parece firula, mas é o que garante duas propriedades valiosas: **associatividade** (x ⊛ g ⊛ h pode ser agrupado como quiser) e **comutatividade** (x ⊛ h = h ⊛ x). Na prática, isso permite combinar vários filtros em um só antes de tocar na imagem.

E a boa notícia preguiçosa: **quando o kernel é simétrico, correlação e convolução dão exatamente o mesmo resultado**. Como boa parte dos kernels de suavização é simétrica, muita gente passa a vida inteira usando os dois termos como sinônimo e nunca é desmentida.`,
      },
      {
        heading: "Suavização: média, ponderada e mediana",
        body: `Os filtros de suavização atenuam variações bruscas de intensidade. O mais básico é o **filtro de média**: todos os elementos valem 1 e o resultado é dividido por uma constante de normalização de **1/(m×n)** — no caso de um 3×3, 1/9.

Na **média ponderada**, o centro pesa mais que as bordas (o clássico 1-2-1 / 2-4-2 / 1-2-1), e a normalização vira a soma dos pesos — de preferência uma potência de 2, porque computador gosta. O efeito depende tanto dos valores quanto do **tamanho** do filtro: quanto maior a máscara, mais borrada fica a saída.

Mas existe uma família que não faz conta nenhuma — os **filtros não-lineares** (ou de estatística de ordem), que ordenam os pixels da vizinhança e escolhem um. O **mínimo** erode objetos claros, o **máximo** dilata e preenche falhas, o **moda** pega o valor mais frequente, e o queridinho é o **filtro de mediana**: ordena os nove valores de um 3×3, pega o quinto e pronto. Ele é **imbatível contra ruído sal e pimenta** (aqueles pontinhos brancos e pretos espalhados), porque um pixel absurdamente claro ou escuro simplesmente vai parar na ponta da lista ordenada e é ignorado — enquanto o filtro de média faria questão de incluí-lo na conta e espalhar a sujeira.`,
      },
      {
        heading: "Bordas: onde a imagem muda de ideia",
        body: `Agora a virada de chave. **Detectar bordas** é identificar mudanças bruscas — descontinuidades — em uma imagem. Faz sentido: boa parte da informação semântica e de forma está justamente nos contornos. Tanto que o ideal, o padrão-ouro, é o **desenho de linhas de um artista**: poucos traços e você já sabe o que é.

Bordas aparecem por vários motivos: descontinuidade da **normal da superfície**, da **profundidade**, da **cor da superfície** ou da **iluminação**.

E como achar isso matematicamente? Encarando a **imagem como uma função**: se você plotar a intensidade de uma linha da imagem, as bordas viram penhascos íngremes. E penhasco, no mundo do cálculo, se acha com **derivada**. A primeira derivada dá picos nos extremos da transição — daí vem a **magnitude do gradiente**, que mede a "força" da borda (alta = transição abrupta, baixa = degradê suave). A segunda derivada é ainda mais precisa: ela passa por **zero exatamente em cima da borda**, o famoso *cruzamento em zero*, calculado com o operador **Laplaciano**. A orientação do gradiente, por sua vez, sempre aponta perpendicular à borda.`,
      },
      {
        heading: "O problema: derivada adora ruído",
        body: `Eis o plot twist. Derivada **amplifica ruído**. Filtros derivativos respondem intensamente a qualquer pixel que difira dos vizinhos — e ruído é, por definição, exatamente isso.

O resultado é aquele gráfico deprimente: você tem um sinal com uma borda nítida, aplica a derivada e recebe de volta um borrão de picos aleatórios onde é impossível apontar onde a borda está. Você pediu contorno, levou caos.

**A solução é suavizar primeiro** (passa-baixa, lembra?) e derivar depois. E tem um atalho elegante: pelo **teorema da derivada da convolução**, derivar a imagem suavizada é o mesmo que convoluir a imagem com a **derivada da Gaussiana** já pronta. Duas operações viram uma, e o resultado é idêntico.

O preço? O clássico **trade-off entre suavização e localização**: sigma pequeno detecta detalhes finos mas deixa passar ruído; sigma grande limpa tudo mas borra e desloca as bordas.`,
        image: "https://media1.tenor.com/m/pSu4e55-1R8AAAAd/dog-biting-hand.gif",
        imageAlt: "GIF de um cachorro mordendo a mão de uma pessoa",
        imageContain: true,
      },
      {
        heading: "Os kernels clássicos: Roberts, Prewitt e Sobel",
        body: `A magnitude do gradiente pode ser aproximada por diferentes kernels, e três nomes aparecem sempre:

**Roberts** é o minimalista: um 2×2 que trabalha nas diagonais de 45º e 135º, realçando bordas inclinadas mais que as outras.

**Prewitt** usa um 3×3 com pesos iguais — uma diferença finita aplicada em três linhas de uma vez.

**Sobel** é o Prewitt com autoestima: dá **peso 2 para a linha ou coluna central**, o que embute uma suavização no próprio filtro e o torna mais resistente a ruído. É por isso que ele é o mais usado dos três até hoje.`,
        code: `# Prewitt                # Sobel
hx = [-1  0  1]          hx = [-1  0  1]
     [-1  0  1]               [-2  0  2]
     [-1  0  1]               [-1  0  1]

hy = [-1 -1 -1]          hy = [-1 -2 -1]
     [ 0  0  0]               [ 0  0  0]
     [ 1  1  1]               [ 1  2  1]`,
      },
      {
        heading: "Canny: o detector que junta tudo",
        body: `Antes de escolher um detector, vale saber o que é um detector **ótimo**. São três critérios: **boa detecção** (minimizar falsos positivos e falsos negativos), **boa localização** (a borda detectada deve estar o mais perto possível da real) e **resposta única** (um ponto detectado para cada ponto real, sem borda triplicada).

O **detector de Canny** ataca os três em quatro passos:

**1.** Filtra a imagem com as derivadas x e y da Gaussiana — removendo o ruído que geraria bordas falsas.
**2.** Calcula **magnitude e orientação** do gradiente, identificando as regiões de variação abrupta.
**3.** Aplica **supressão de não-máximos**: para cada pixel, compara sua magnitude com a dos dois vizinhos **na direção do gradiente**. Se ele não for o maior, é zerado. Isso afina aquelas bordas gordas de vários pixels em linhas de um pixel só.
**4.** Faz **limiarização com histerese**, usando dois limiares (L e H). Acima de H é borda forte e fica. Abaixo de L é descartado. E entre os dois? Só sobrevive se estiver **conectado a uma borda forte** — é o que evita que uma borda real fique picotada no meio.

O σ continua sendo o botão de ajuste: **σ baixo** pega detalhes finos, **σ alto** pega só as bordas de grande escala.`,
      },
      {
        heading: "Na prática: três linhas de Python",
        body: `Toda essa teoria cabe em um punhado de linhas com **scikit-image**. Rode com σ = 1 e σ = 3 na mesma imagem ruidosa e a diferença fala por si: o primeiro devolve um contorno trêmulo e cheio de fragmentos, o segundo entrega uma linha limpa e contínua.

E é aqui que o processamento de imagens fica viciante: você começou com uma matriz de números sem sentido nenhum e terminou com o computador desenhando o contorno das coisas — que é, no fundo, o mesmo traço que o artista faz. Agora vai lá brincar com o sigma.`,
        code: `from skimage import feature, io

img = io.imread("imagem.png", as_gray=True)

bordas_finas  = feature.canny(img, sigma=1)
bordas_largas = feature.canny(img, sigma=3)`,
        image: "https://media1.tenor.com/m/LjwBOfvg4r4AAAAd/scuba-scuba-cat.gif",
        imageAlt: "GIF de um gatinho com roupa de mergulho dançando",
        imageContain: true,
        
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
