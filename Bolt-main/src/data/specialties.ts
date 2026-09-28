export interface SpecialtyService {
  name: string;
  description: string;
}

export interface Specialty {
  id: string;
  name: string;
  shortDescription: string;
  highlighted: boolean;
  tagline?: string;
  intro?: string;
  services?: SpecialtyService[];
  closingText?: string;
  cta?: string;
}

export const specialties: Specialty[] = [
  {
    id: 'periodontia',
    name: 'Periodontia',
    shortDescription:
      'Prevenção e tratamento das doenças da gengiva e dos tecidos de suporte dos dentes, além de procedimentos estéticos e cirurgias periodontais, como correção do sorriso gengival, tratamento de recessões e enxertos gengivais.',
    highlighted: true,
    tagline: 'Saúde gengival é parte essencial de um sorriso saudável e duradouro.',
    intro:
      'A Periodontia é a área da Odontologia dedicada à prevenção, diagnóstico e tratamento das doenças que afetam a gengiva e os tecidos que sustentam os dentes. No Instituto Bernat, o cuidado periodontal alia precisão clínica, tecnologia e acompanhamento individualizado, buscando preservar a saúde bucal e a estética do sorriso.',
    services: [
      { name: 'Tratamento da gengivite', description: 'Controle da inflamação e do sangramento gengival, com orientação de higiene e acompanhamento profissional.' },
      { name: 'Tratamento da periodontite', description: 'Diagnóstico e controle da doença periodontal, buscando interromper sua progressão e preservar dentes e tecidos de suporte.' },
      { name: 'Raspagem e terapia periodontal', description: 'Remoção de biofilme e cálculo dental, associada a protocolos individualizados de manutenção periodontal.' },
      { name: 'Gengivoplastia', description: 'Remodelação do contorno gengival para proporcionar maior harmonia e equilíbrio ao sorriso.' },
      { name: 'Gengivectomia', description: 'Remoção criteriosa do excesso de tecido gengival em situações funcionais ou estéticas.' },
      { name: 'Tratamento do sorriso gengival', description: 'Avaliação das diferentes causas da exposição gengival e planejamento individualizado para melhorar a proporção entre dentes e gengiva.' },
      { name: 'Recobrimento radicular', description: 'Tratamento das recessões gengivais com técnicas cirúrgicas destinadas à proteção da raiz e à melhora estética.' },
      { name: 'Enxertos gengivais', description: 'Procedimentos para aumentar ou reconstruir o tecido gengival em áreas que apresentam deficiência de gengiva.' },
    ],
    closingText: 'Cuidar da gengiva é cuidar da base do seu sorriso.',
    cta: 'Agende sua Avaliação Periodontal',
  },
  {
    id: 'implantodontia',
    name: 'Implantodontia',
    shortDescription:
      'Reabilitação de dentes perdidos com implantes dentários, incluindo enxertos ósseos e outros procedimentos relacionados à reconstrução dos tecidos necessários para a instalação dos implantes, a partir de um planejamento individualizado que busca devolver função, conforto e naturalidade ao sorriso.',
    highlighted: true,
    tagline: 'Reconstruir um sorriso é devolver mais do que dentes: é recuperar função, segurança e qualidade de vida.',
    intro:
      'A Implantodontia é dedicada à reabilitação de pacientes que perderam um ou mais dentes por meio de implantes dentários. No Instituto Bernat, cada caso é planejado individualmente, considerando as condições ósseas, gengivais, funcionais e estéticas de cada paciente.',
    services: [
      { name: 'Implantes dentários unitários', description: 'Substituição de dentes ausentes de forma individualizada, buscando integração estética e funcional.' },
      { name: 'Reabilitação com implantes múltiplos', description: 'Planejamento para pacientes com ausência de vários dentes.' },
      { name: 'Próteses sobre implantes', description: 'Soluções fixas ou removíveis apoiadas em implantes para recuperar função e estética.' },
      { name: 'Enxertos ósseos', description: 'Procedimentos destinados à reconstrução ou aumento do volume ósseo quando necessário para a instalação dos implantes.' },
      { name: 'Regeneração óssea guiada', description: 'Técnicas de reconstrução dos tecidos de suporte para viabilizar ou melhorar a reabilitação com implantes.' },
      { name: 'Enxertos gengivais e reconstrução de tecidos', description: 'Procedimentos voltados à qualidade e à estética dos tecidos ao redor dos implantes.' },
      { name: 'Planejamento digital', description: 'Utilização de recursos de diagnóstico e planejamento para maior precisão e previsibilidade.' },
      { name: 'Manutenção de implantes', description: 'Acompanhamento periódico para preservar a saúde dos tecidos ao redor dos implantes e a longevidade da reabilitação.' },
    ],
    closingText: 'Cada sorriso tem uma história. O planejamento também deve ser individual.',
    cta: 'Agende sua Avaliação para Implantes',
  },
  {
    id: 'odontologia-esporte',
    name: 'Odontologia do Esporte',
    shortDescription:
      'Cuidado odontológico especializado para atletas profissionais, amadores e praticantes de atividades físicas, incluindo prevenção de traumas, protetores bucais personalizados e acompanhamento da saúde bucal relacionada à prática esportiva.',
    highlighted: true,
    tagline: 'Saúde bucal também faz parte do desempenho.',
    intro:
      'A Odontologia do Esporte é a especialidade que cuida da saúde bucal do atleta considerando as particularidades da prática esportiva. No Instituto Bernat, o atendimento é direcionado tanto a atletas profissionais quanto amadores, com foco em prevenção, proteção, saúde e desempenho.',
    services: [
      { name: 'Avaliação odontológica do atleta', description: 'Exame completo considerando modalidade esportiva, rotina de treinos, alimentação, hidratação, histórico de traumas e fatores de risco individuais.' },
      { name: 'Protetores bucais personalizados', description: 'Confeccionados individualmente de acordo com a modalidade e as características do atleta, buscando proteção, conforto e adaptação durante a prática esportiva.' },
      { name: 'Prevenção e tratamento de traumatismos dentários', description: 'Orientação, prevenção e acompanhamento de traumas relacionados à prática esportiva.' },
      { name: 'Protetores faciais personalizados', description: 'Planejamento e confecção individualizada para situações específicas, especialmente no retorno ao esporte após traumas ou cirurgias.' },
      { name: 'Saúde periodontal do atleta', description: 'Prevenção, diagnóstico e controle das condições gengivais e periodontais que podem interferir na saúde e na rotina esportiva.' },
      { name: 'Bruxismo, apertamento e DTM no esporte', description: 'Avaliação de hábitos parafuncionais, sintomas musculares e articulares e sua relação com treinamento, estresse e recuperação.' },
      { name: 'Avaliação de hábitos e fatores de risco do esporte', description: 'Atenção à frequência alimentar, bebidas esportivas, hidratação, xerostomia, erosão dentária, cárie e outros fatores relacionados à rotina esportiva.' },
      { name: 'Acompanhamento odontológico periódico', description: 'Monitoramento da saúde bucal ao longo da temporada, buscando prevenção e identificação precoce de alterações.' },
      { name: 'Atendimento a equipes, clubes e organizações esportivas', description: 'Programas de acompanhamento odontológico estruturados de acordo com as necessidades dos atletas e da instituição.' },
    ],
    closingText: 'Você não precisa ser atleta profissional para cuidar da sua saúde bucal como parte do seu esporte.',
    cta: 'Agende sua Avaliação Odontológica do Atleta',
  },
  {
    id: 'ortodontia-invisalign',
    name: 'Ortodontia e Invisalign',
    shortDescription:
      'Correção do alinhamento dos dentes e da mordida com aparelhos ortodônticos e alinhadores transparentes Invisalign, para crianças, adolescentes e adultos.',
    highlighted: true,
    tagline: 'Um sorriso alinhado pode transformar não apenas a estética, mas também a função e a saúde bucal.',
    intro:
      'A Ortodontia atua na correção do posicionamento dos dentes e das alterações da mordida, contribuindo para um sorriso mais equilibrado e uma função mastigatória adequada. No Instituto Bernat, o tratamento é planejado de acordo com a idade, necessidades clínicas e objetivos de cada paciente.',
    services: [
      { name: 'Ortodontia preventiva e interceptativa', description: 'Acompanhamento do desenvolvimento da dentição e tratamento precoce de alterações quando indicado.' },
      { name: 'Ortodontia para adolescentes', description: 'Correção do alinhamento dentário e da mordida durante o desenvolvimento.' },
      { name: 'Ortodontia para adultos', description: 'Tratamentos individualizados para corrigir alterações de posicionamento e oclusão.' },
      { name: 'Aparelhos ortodônticos', description: 'Diferentes opções de aparelhos de acordo com a necessidade clínica de cada paciente.' },
      { name: 'Invisalign', description: 'Tratamento com alinhadores transparentes, removíveis e personalizados, planejados digitalmente.' },
      { name: 'Correção de apinhamentos e espaçamentos', description: 'Tratamento de dentes desalinhados, sobrepostos ou com espaços excessivos.' },
      { name: 'Correção de alterações da mordida', description: 'Tratamento de condições como mordida profunda, aberta, cruzada e outras alterações oclusais.' },
      { name: 'Planejamento digital do tratamento', description: 'Utilização de recursos digitais para auxiliar no planejamento e acompanhamento da movimentação dentária.' },
      { name: 'Contenções e acompanhamento pós-tratamento', description: 'Manutenção dos resultados obtidos após a conclusão do tratamento ortodôntico.' },
    ],
    closingText: 'Seu tratamento deve respeitar seu sorriso, sua rotina e suas necessidades.',
    cta: 'Agende sua Avaliação Ortodôntica',
  },
  {
    id: 'odontologia-estetica',
    name: 'Odontologia Estética',
    shortDescription:
      'Tratamentos que integram saúde, função e estética, respeitando a individualidade de cada sorriso, como clareamento dental, restaurações estéticas, facetas e lentes de contato dental.',
    highlighted: true,
    tagline: 'Estética e saúde caminham juntas quando o planejamento respeita a individualidade de cada sorriso.',
    intro:
      'A Odontologia Estética reúne tratamentos destinados a melhorar forma, cor, proporção e harmonia dos dentes, sempre considerando a função e a saúde bucal. No Instituto Bernat, cada procedimento é planejado de maneira personalizada, valorizando resultados naturais.',
    services: [
      { name: 'Clareamento dental', description: 'Tratamento destinado a tornar os dentes mais claros de maneira controlada e individualizada.' },
      { name: 'Restaurações estéticas em resina composta', description: 'Reconstrução de dentes comprometidos por cárie, fraturas, desgastes ou alterações de forma.' },
      { name: 'Recontorno estético', description: 'Pequenas modificações na anatomia dental para melhorar proporções e harmonia.' },
      { name: 'Facetas em resina composta', description: 'Reconstrução estética personalizada para alterações de forma, proporção e cor.' },
      { name: 'Facetas cerâmicas', description: 'Restaurações indiretas planejadas para proporcionar estética, resistência e naturalidade.' },
      { name: 'Lentes de contato dental', description: 'Laminados cerâmicos ultrafinos indicados para casos selecionados, após avaliação individualizada.' },
      { name: 'Fechamento de espaços (Diastemas)', description: 'Reconstrução estética para correção de determinados diastemas e alterações de proporção.' },
      { name: 'Reabilitação estética anterior', description: 'Planejamento integrado de diferentes procedimentos para recuperar harmonia e naturalidade do sorriso.' },
      { name: 'Planejamento estético digital', description: 'Recursos digitais que auxiliam na análise e no planejamento individualizado do tratamento.' },
    ],
    closingText: 'Mais do que transformar sorrisos, buscamos preservar aquilo que torna cada sorriso único.',
    cta: 'Agende sua Avaliação Estética',
  },
  {
    id: 'endodontia',
    name: 'Endodontia',
    shortDescription:
      'Diagnóstico e tratamento de alterações que comprometem a parte interna do dente, incluindo o tratamento de canal, para controlar infecções e preservar o dente natural.',
    highlighted: false,
    tagline: 'Preservar o dente natural é, sempre que possível, parte essencial do tratamento.',
    intro:
      'A Endodontia é responsável pelo diagnóstico e tratamento das alterações que comprometem a polpa e os tecidos internos do dente. O tratamento adequado permite controlar infecções, aliviar a dor e preservar dentes que, de outra forma, poderiam ser perdidos.',
    services: [
      { name: 'Tratamento endodôntico (tratamento de canal)', description: 'Remoção do tecido pulpar comprometido, limpeza e selamento dos canais radiculares.' },
      { name: 'Tratamento de urgências endodônticas', description: 'Atendimento de quadros de dor e inflamação relacionados à polpa dental.' },
      { name: 'Tratamento de infecções endodônticas', description: 'Controle de processos infecciosos relacionados ao sistema de canais radiculares.' },
      { name: 'Retratamento endodôntico', description: 'Nova abordagem de um tratamento de canal anterior quando persistem alterações ou quando há necessidade de correção.' },
      { name: 'Diagnóstico de dor odontogênica', description: 'Investigação da origem da dor para diferenciar alterações pulpares, periodontais e outras condições.' },
      { name: 'Tratamento de dentes traumatizados', description: 'Acompanhamento e tratamento de alterações pulpares decorrentes de traumatismos dentários.' },
    ],
    closingText: 'Quando o dente pode ser preservado, o objetivo é cuidar para que ele permaneça parte do seu sorriso.',
    cta: 'Agende sua Avaliação Endodôntica',
  },
  {
    id: 'protese-reabilitacao',
    name: 'Prótese e Reabilitação Oral',
    shortDescription:
      'Reabilitação de dentes comprometidos ou ausentes por meio de coroas, próteses fixas, removíveis e sobre implantes, buscando restabelecer função e estética.',
    highlighted: false,
    tagline: 'Reabilitar um sorriso é devolver equilíbrio entre função, estética e conforto.',
    intro:
      'A Reabilitação Oral reúne diferentes áreas da Odontologia para recuperar dentes comprometidos ou ausentes, restabelecendo mastigação, fala, estética e segurança ao sorrir. O planejamento considera as necessidades clínicas e os objetivos individuais de cada paciente.',
    services: [
      { name: 'Coroas dentárias', description: 'Restauração de dentes comprometidos, buscando recuperar resistência, anatomia e estética.' },
      { name: 'Próteses fixas', description: 'Substituição ou reconstrução de estruturas dentárias de maneira fixa.' },
      { name: 'Próteses removíveis', description: 'Soluções para reposição de dentes ausentes quando indicadas.' },
      { name: 'Próteses sobre implantes', description: 'Reabilitação de dentes ausentes utilizando implantes como suporte.' },
      { name: 'Reabilitação de dentes desgastados', description: 'Recuperação da anatomia, função e estética de dentes que apresentam desgaste significativo.' },
      { name: 'Reabilitação estética e funcional', description: 'Planejamento integrado para casos que envolvem alterações de forma, função, oclusão e estética.' },
      { name: 'Planejamento de casos complexos', description: 'Integração entre diferentes especialidades para uma abordagem completa.' },
      { name: 'Manutenção das reabilitações', description: 'Acompanhamento periódico para preservar a saúde bucal e a longevidade dos tratamentos.' },
    ],
    closingText: 'Cada reabilitação começa com um diagnóstico preciso e um planejamento individualizado.',
    cta: 'Agende sua Avaliação de Reabilitação Oral',
  },
  {
    id: 'dtm-dor-orofacial',
    name: 'DTM e Dor Orofacial',
    shortDescription:
      'Diagnóstico e tratamento das disfunções da ATM, dos músculos da mastigação e das dores orofaciais, incluindo sintomas como dor, estalos, limitação dos movimentos da mandíbula e desconforto muscular.',
    highlighted: false,
    tagline: 'Dor, tensão e alterações na mandíbula merecem uma avaliação cuidadosa.',
    intro:
      'A área de DTM e Dor Orofacial é dedicada ao diagnóstico e tratamento das alterações que envolvem a articulação temporomandibular (ATM), os músculos da mastigação e outras estruturas relacionadas à região orofacial.',
    services: [
      { name: 'Disfunções temporomandibulares (DTM)', description: 'Diagnóstico e tratamento das alterações que envolvem a ATM e os músculos da mastigação.' },
      { name: 'Dor muscular', description: 'Investigação e controle de dores e tensão na musculatura da face e da mandíbula.' },
      { name: 'Dor na ATM', description: 'Avaliação de dores articulares e alterações relacionadas aos movimentos mandibulares.' },
      { name: 'Estalos e ruídos articulares', description: 'Investigação de sons e alterações durante abertura e fechamento da boca.' },
      { name: 'Limitação dos movimentos mandibulares', description: 'Avaliação de dificuldades para abrir ou movimentar a mandíbula.' },
      { name: 'Bruxismo e apertamento', description: 'Avaliação de hábitos parafuncionais e de suas possíveis repercussões sobre dentes, músculos e articulações.' },
      { name: 'Cefaleias relacionadas à região orofacial', description: 'Investigação odontológica de dores que podem estar associadas às estruturas mastigatórias.' },
      { name: 'Placas e dispositivos intraorais', description: 'Quando indicados, podem fazer parte da abordagem individualizada do paciente.' },
      { name: 'Acompanhamento multidisciplinar', description: 'Integração com outras áreas da saúde quando o caso necessita de uma abordagem conjunta.' },
    ],
    closingText: 'Entender a origem da dor é o primeiro passo para definir o cuidado adequado.',
    cta: 'Agende sua Avaliação de DTM e Dor Orofacial',
  },
  {
    id: 'cirurgia-oral-menor',
    name: 'Cirurgia Oral Menor',
    shortDescription:
      'Procedimentos como extrações dentárias simples e complexas (sisos), biópsias, frenectomias labiais e linguais, remoção de cistos e pequenas lesões bucais e outras cirurgias realizadas em consultório.',
    highlighted: false,
    tagline: 'Precisão, planejamento e segurança em procedimentos cirúrgicos realizados em consultório.',
    intro:
      'A Cirurgia Oral Menor envolve procedimentos cirúrgicos realizados na cavidade bucal para tratar dentes, tecidos e pequenas alterações que necessitam de intervenção. No Instituto Bernat, cada procedimento é precedido por avaliação clínica e planejamento individualizado.',
    services: [
      { name: 'Extração de dentes', description: 'Remoção de dentes com indicação clínica, incluindo casos simples e complexos.' },
      { name: 'Cirurgia de terceiros molares (sisos)', description: 'Avaliação e remoção de dentes do siso quando indicada.' },
      { name: 'Frenectomia labial', description: 'Procedimento para correção de alterações do freio labial.' },
      { name: 'Frenectomia lingual', description: 'Intervenção para alterações relacionadas ao freio da língua, quando indicada.' },
      { name: 'Biópsias', description: 'Remoção de fragmentos de tecido para investigação diagnóstica.' },
      { name: 'Remoção de cistos e pequenas lesões', description: 'Tratamento cirúrgico de alterações selecionadas da cavidade oral.' },
      { name: 'Cirurgias pré-protéticas', description: 'Procedimentos destinados a preparar os tecidos para determinadas reabilitações.' },
      { name: 'Preservação alveolar', description: 'Técnicas destinadas à manutenção do volume ósseo após determinadas extrações, quando indicadas.' },
      { name: 'Acompanhamento pós-operatório', description: 'Orientações e acompanhamento individualizado durante a recuperação.' },
    ],
    closingText: 'Cada procedimento é planejado considerando as características clínicas e as necessidades de cada paciente.',
    cta: 'Agende sua Avaliação Cirúrgica',
  },
  {
    id: 'harmonizacao-orofacial',
    name: 'Harmonização Orofacial',
    shortDescription:
      'Procedimentos como toxina botulínica, preenchimento com ácido hialurônico e bioestimuladores de colágeno, voltados à estética e à função, buscando equilíbrio, proporção e naturalidade facial.',
    highlighted: false,
    tagline: 'Equilíbrio, proporção e naturalidade devem estar no centro de qualquer planejamento facial.',
    intro:
      'A Harmonização Orofacial reúne procedimentos destinados ao equilíbrio estético e funcional da face, considerando as características individuais de cada paciente. No Instituto Bernat, os tratamentos são planejados de forma personalizada, respeitando proporções faciais e objetivos individuais.',
    services: [
      { name: 'Toxina botulínica (botox)', description: 'Utilizada em indicações estéticas e funcionais, de acordo com avaliação individual.' },
      { name: 'Preenchimento com ácido hialurônico', description: 'Procedimento destinado à reposição ou definição de volume e contornos em regiões selecionadas da face.' },
      { name: 'Preenchimento labial', description: 'Planejamento individualizado para definição, hidratação e equilíbrio dos lábios.' },
      { name: 'Harmonização do contorno facial', description: 'Utilização de recursos injetáveis para trabalhar proporções e contornos faciais quando indicados.' },
      { name: 'Bioestimuladores de colágeno', description: 'Procedimentos destinados a estimular a produção de colágeno e melhorar aspectos relacionados à qualidade e firmeza da pele.' },
      { name: 'Tratamentos funcionais', description: 'Utilização de recursos da Harmonização Orofacial em determinadas condições funcionais, conforme indicação profissional.' },
      { name: 'Planejamento facial individualizado', description: 'Análise das proporções e características de cada rosto antes da definição do protocolo.' },
      { name: 'Protocolos personalizados', description: 'Associação de diferentes procedimentos quando necessária para alcançar um resultado equilibrado e natural.' },
    ],
    closingText: 'O objetivo não é padronizar rostos, mas valorizar características individuais com equilíbrio e naturalidade.',
    cta: 'Agende sua Avaliação em Harmonização Orofacial',
  },
  {
    id: 'odontologia-sono',
    name: 'Odontologia do Sono',
    shortDescription:
      'Avaliação e tratamento odontológico de distúrbios relacionados ao sono, como ronco e apneia obstrutiva, com uso de aparelhos intraorais e atuação integrada a outros profissionais da saúde.',
    highlighted: false,
    tagline: 'Dormir bem também faz parte da saúde.',
    intro:
      'A Odontologia do Sono atua na avaliação e no tratamento odontológico de alterações relacionadas ao sono, especialmente condições como ronco e apneia obstrutiva do sono. O tratamento é individualizado e, quando necessário, integrado à atuação de médicos e outros profissionais da saúde.',
    services: [
      { name: 'Avaliação odontológica do sono', description: 'Investigação das características bucais e fatores relacionados à respiração durante o sono.' },
      { name: 'Avaliação do ronco', description: 'Investigação das possíveis causas e indicação da abordagem adequada para cada paciente.' },
      { name: 'Apneia obstrutiva do sono', description: 'Acompanhamento odontológico de pacientes diagnosticados ou em investigação, dentro da atuação multidisciplinar.' },
      { name: 'Aparelhos intraorais', description: 'Dispositivos individualizados que podem ser indicados para determinados pacientes com ronco e apneia obstrutiva do sono.' },
      { name: 'Planejamento e adaptação dos aparelhos', description: 'Acompanhamento da adaptação, conforto e resposta ao tratamento.' },
      { name: 'Acompanhamento clínico', description: 'Monitoramento periódico do paciente durante o tratamento.' },
      { name: 'Atuação integrada', description: 'Comunicação com médicos do sono, otorrinolaringologistas e outros profissionais quando necessária uma abordagem multidisciplinar.' },
    ],
    closingText: 'Uma boa noite de sono pode começar com uma avaliação adequada.',
    cta: 'Agende sua Avaliação em Odontologia do Sono',
  },
];
