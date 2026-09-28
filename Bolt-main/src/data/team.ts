export interface TeamMember {
  id: string;
  name: string;
  specialties: string;
  cro: string;
  credentials: string[];
  photo?: string;
}

export const team: TeamMember[] = [
  {
    id: 'milla-bernat',
    name: 'Dra. Milla Bernat',
    specialties: 'Periodontia, Implantodontia e Odontologia do Esporte',
    cro: 'CRO-DF 7915',
    photo: '/images/quem-somos/Dra_Milla.jpg',
    credentials: [
      'Bacharel em Odontologia pela Universidade Católica de Brasília',
      'Mestra em Odontologia pela Universidade de Brasília',
      'Especialista em Periodontia',
      'Especialista em Implantodontia',
      'Especialista em Odontologia do Esporte',
      'Aperfeiçoamento em Cirurgia Oral Menor',
      'Professora titular de Periodontia do curso de Odontologia no UNIEURO',
      'Membro da Sociedade Brasileira de Periodontia e Implantodontia (SOBRAPI)',
      'Membro da Comissão de Responsabilidade Social da SOBRAPI',
      'Membro da Sociedade Brasileira de Odontologia do Exercício e Esporte',
      'Membro da Academia Brasileira de Odontologia do Esporte (ABROE)',
      'Membro do ITI (International Team of Implantology)',
      'Fundadora do Bernat Academy, cursos de extensão voltados à Cirurgias Plásticas Periodontais',
    ],
  },
  {
    id: 'polyana-carvalho',
    name: 'Dra. Polyana Carvalho',
    specialties: 'Ortodontista, Invisalign Doctor e Harmonização Orofacial',
    cro: 'CRO-DF 9320',
    photo: '/images/quem-somos/Dra._Polyana_Carvalho.jpg',
    credentials: [
      'Graduada em Odontologia pela UnB com mais de 15 anos de experiência clínica',
      'Mestre em Ciências da Saúde — Prótese Bucomaxilofacial (UnB)',
      'Especialista em Ortodontia (ABO-Taguatinga)',
      'Invisalign Doctor desde 2019',
      'Aperfeiçoamento em Odontologia Estética e Funcional: facetas cerâmicas, restaurações, enceramento diagnóstico e HOF',
      'Foco em planejamento digital e abordagem acolhedora',
    ],
  },
  {
    id: 'beatriz-dornelas',
    name: 'Dra. Beatriz Dornelas',
    specialties: 'Clínica geral e Estética',
    cro: 'CRO-DF 17.220',
    photo: '/images/quem-somos/Dra_Beatriz_de_Figueiredo_Dornelas_Furtado_Borba.jpg',
    credentials: [
      'Graduada em Odontologia pela Universidade Federal de Juiz de Fora (UFJF)',
      'Especialista em Saúde Pública e Saúde da Família',
      'Aperfeiçoamento em Laserterapia',
      'Aperfeiçoamento em Estomatologia',
      'Aperfeiçoamento em Urgências e Emergências odontológicas',
      'Imersão em Facetas de Resinas Compostas',
      'Imersão em Harmonização Orofacial',
    ],
  },
  {
    id: 'helton-costa',
    name: 'Dr. Helton Costa',
    specialties: 'Implantodontia, Prótese e Odontologia Digital',
    cro: 'CRO-DF 11.869',
    photo: '/images/quem-somos/Dr._Helton_Costa.jpg',
    credentials: [
      'Bacharel em Odontologia (UNIEURO)',
      'Especialista em Implantodontia (IPESP)',
      'Especialista em Prótese Dentária (IPESP)',
      'Mestre em Odontologia (UnB)',
      'Doutorando em Odontologia (UnB)',
      'Coordenador Adjunto de Odontologia (UNIEURO)',
      'Coordenador de Pós-Graduação em Implantodontia (UNIEURO)',
      'Professor Titular de Prótese, Implantodontia e Odontologia Digital (UNIEURO)',
      'Professor convidado em cursos de Pós-Graduação (Prótese, Cirurgia, Dentística e Odontologia Digital)',
    ],
  },
  {
    id: 'mateus-veppo',
    name: 'Dr. Mateus Veppo',
    specialties: 'Implantodontia e Cirurgia Oral Menor',
    cro: 'CRO-DF 9674',
    photo: '/images/quem-somos/Dr._Matheus_Veppo.jpeg',
    credentials: [
      'Graduado em Odontologia pela UnB',
      'Especialista em Implantodontia (IBPG)',
      'Mestre em Ciências da Saúde (UnB)',
      'Professor de Graduação (UNIEURO)',
      'Coordenador do curso de especialização em Implantodontia (Unieuro)',
      'Habilitação em sedação consciente com óxido nitroso',
    ],
  },
  {
    id: 'amanda-guimaraes',
    name: 'Dra. Amanda Guimarães',
    specialties: 'Harmonização Orofacial',
    cro: 'CRO-DF 16186',
    photo: '/images/quem-somos/Dra._Amanda_Guimaraes.jpeg',
    credentials: [
      'Graduada em Odontologia pela Unieuro',
      'Especialista em Periodontia (IOA Brasília)',
      'Especialista em Implantodontia (IOA Brasília)',
      'Especialista em Harmonização Orofacial (FaceLab)',
      'Residente em Estética da face (Instituto Raulino Brasil)',
      'Aperfeiçoamento em Cirurgia Oral Menor (Instituto Resende)',
    ],
  },
  {
    id: 'mariana-pedrosa',
    name: 'Dra. Mariana Pedrosa',
    specialties: 'Endodontia',
    cro: 'CRO-DF 6387',
    photo: '/images/quem-somos/Dra._Mariana_Pedrosa.jpeg',
    credentials: [
      'Bacharel em Odontologia pela FOPLAC — Faculdade de Odontologia do Planalto Central',
      'Especialização em Endodontia pela FOPLAC',
      'Especialização em Harmonização Orofacial pelo Instituto Aria',
      'Habilitação em Ozônio pelo Instituto Aria',
      'Habilitação em LASER pelo Instituto Aria',
    ],
  },
  {
    id: 'daniela-sampaio',
    name: 'Dra. Daniela Sampaio',
    specialties: 'Ortodontia e Odontologia do Sono',
    cro: 'CRO-DF 4485',
    photo: '/images/quem-somos/Daniela_Sampaio_Carvalho_Clark.jpg',
    credentials: [
      'Especialista em Ortodontia',
      'Mestre em Odontologia — Ortodontia',
      'Membro da Diretoria da Associação Brasileira de Ortodontia (ABOR-DF)',
    ],
  },
];
