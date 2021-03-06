interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  disableSorting?: false | true;
}

export const headCells: Column[] = [
  {
    id: 'actions',
    label: 'Ações',
    minWidth: 20,
    align: 'center',
    disableSorting: true,
  },
  {
    id: 'codigo_produto',
    label: 'Código Produto',
    minWidth: 120,
    align: 'left',
  },
  {
    id: 'descricao',
    label: 'Descrição',
    minWidth: 120,
    align: 'left',
  },
  {
    id: 'ncm',
    label: 'N.C.M',
    minWidth: 120,
    align: 'left',
  },
  {
    id: 'unidade_medida',
    label: 'UM',
    minWidth: 120,
    align: 'left',
  },
  {
    id: 'peso_liquido',
    label: 'Peso Liquido',
    minWidth: 120,
    align: 'right',
  },
  {
    id: 'tipo_produto',
    label: 'Tipo de Produto',
    minWidth: 120,
    align: 'left',
  },
];

export const cargaProduto = [
  {
    codigo_produto: '1',
    descricao: 'Engracia',
    ncm: 'RO98 XNQW JMEX L9IK MJYV ZNWY',
    unidade_medida: 'III',
    peso_liquido: 1,
    tipo_produto: 'BBTF',
  },
  {
    codigo_produto: '2',
    descricao: 'Corinna',
    ncm: 'VG49 UMOP 0175 7943 4531 9768',
    unidade_medida: 'Sr',
    peso_liquido: 2,
    tipo_produto: 'K',
  },
  {
    codigo_produto: '3',
    descricao: 'Sissy',
    ncm: 'SE78 0347 7947 3406 9709 2808',
    unidade_medida: 'Jr',
    peso_liquido: 3,
    tipo_produto: 'CAE',
  },
  {
    codigo_produto: '4',
    descricao: 'Blane',
    ncm: 'SM46 O477 0294 603G OCHM 0BR6 55P',
    unidade_medida: 'Sr',
    peso_liquido: 4,
    tipo_produto: 'CFI',
  },
  {
    codigo_produto: '5',
    descricao: 'Millard',
    ncm: 'CH71 3493 3IP6 S1T4 1BUK O',
    unidade_medida: 'III',
    peso_liquido: 5,
    tipo_produto: 'WPZ',
  },
  {
    codigo_produto: '6',
    descricao: 'Ansel',
    ncm: 'SM53 W522 2814 540O NNZV TEIL QI3',
    unidade_medida: 'IV',
    peso_liquido: 6,
    tipo_produto: 'BL',
  },
  {
    codigo_produto: '7',
    descricao: 'Rolf',
    ncm: 'FR85 7785 0580 45LK GCZE 3SW2 925',
    unidade_medida: 'IV',
    peso_liquido: 7,
    tipo_produto: 'CVGW',
  },
  {
    codigo_produto: '8',
    descricao: 'Modesta',
    ncm: 'KZ15 1950 NNZV 7RUT IGIZ',
    unidade_medida: 'II',
    peso_liquido: 8,
    tipo_produto: 'SSKN',
  },
  {
    codigo_produto: '9',
    descricao: 'Harcourt',
    ncm: 'CZ08 2079 2017 7166 7845 4925',
    unidade_medida: 'III',
    peso_liquido: 9,
    tipo_produto: 'VGSH',
  },
  {
    codigo_produto: '10',
    descricao: 'Noel',
    ncm: 'HR04 6493 7514 5587 6192 1',
    unidade_medida: 'III',
    peso_liquido: 10,
    tipo_produto: 'CLI',
  },
  {
    codigo_produto: '11',
    descricao: 'Vassily',
    ncm: 'LT70 8463 8288 8614 4022',
    unidade_medida: 'Jr',
    peso_liquido: 11,
    tipo_produto: 'AEY',
  },
  {
    codigo_produto: '12',
    descricao: 'Lorie',
    ncm: 'HR79 9900 3156 8812 7079 7',
    unidade_medida: 'II',
    peso_liquido: 12,
    tipo_produto: 'FTXN',
  },
  {
    codigo_produto: '13',
    descricao: 'Hannis',
    ncm: 'AE04 5016 7956 4749 7700 342',
    unidade_medida: 'IV',
    peso_liquido: 13,
    tipo_produto: 'EC',
  },
  {
    codigo_produto: '14',
    descricao: 'Zak',
    ncm: 'DE65 0810 7135 6415 7060 77',
    unidade_medida: 'Sr',
    peso_liquido: 14,
    tipo_produto: 'GDEN',
  },
  {
    codigo_produto: '15',
    descricao: 'Amerigo',
    ncm: 'FR05 7565 4132 34R0 QURI VC8L E12',
    unidade_medida: 'Sr',
    peso_liquido: 15,
    tipo_produto: 'AJX',
  },
  {
    codigo_produto: '16',
    descricao: 'Carmel',
    ncm: 'HU19 8605 4872 3435 0236 2112 2030',
    unidade_medida: 'Jr',
    peso_liquido: 16,
    tipo_produto: 'NFBK',
  },
  {
    codigo_produto: '17',
    descricao: 'Orelle',
    ncm: 'NL40 LFAQ 0424 3045 54',
    unidade_medida: 'Jr',
    peso_liquido: 17,
    tipo_produto: 'ACH',
  },
  {
    codigo_produto: '18',
    descricao: 'Adler',
    ncm: 'IE75 XMNG 1873 6953 5899 95',
    unidade_medida: 'Jr',
    peso_liquido: 18,
    tipo_produto: 'SGZA',
  },
  {
    codigo_produto: '19',
    descricao: 'Suzanne',
    ncm: 'FI11 5904 5304 8246 23',
    unidade_medida: 'Jr',
    peso_liquido: 19,
    tipo_produto: 'MHN',
  },
  {
    codigo_produto: '20',
    descricao: 'Ram',
    ncm: 'FR71 5655 1520 107S 9MA3 UBE6 D02',
    unidade_medida: 'IV',
    peso_liquido: 20,
    tipo_produto: 'PSCU',
  },
  {
    codigo_produto: '21',
    descricao: 'Cornelle',
    ncm: 'HU50 0190 7511 4621 0892 5270 3413',
    unidade_medida: 'IV',
    peso_liquido: 21,
    tipo_produto: 'DEX',
  },
  {
    codigo_produto: '22',
    descricao: 'Kevyn',
    ncm: 'AL55 2449 8176 K8LR HSK4 B90P BLGF',
    unidade_medida: 'II',
    peso_liquido: 22,
    tipo_produto: 'PGH',
  },
  {
    codigo_produto: '23',
    descricao: 'Felicia',
    ncm: 'MK83 598D G9BL YEQN H58',
    unidade_medida: 'Jr',
    peso_liquido: 23,
    tipo_produto: 'ASV',
  },
  {
    codigo_produto: '24',
    descricao: 'Neda',
    ncm: 'GT34 Y6PB BHGN 7GKQ V7JX XNWL XADY',
    unidade_medida: 'IV',
    peso_liquido: 24,
    tipo_produto: 'REGN',
  },
  {
    codigo_produto: '25',
    descricao: 'Genna',
    ncm: 'PS10 IWET 9FLR CSDM IUSP 6IRV HJ3Z Z',
    unidade_medida: 'IV',
    peso_liquido: 25,
    tipo_produto: 'BGR',
  },
  {
    codigo_produto: '26',
    descricao: 'Isidor',
    ncm: 'CH75 4764 3TZA GAYO M00U E',
    unidade_medida: 'II',
    peso_liquido: 26,
    tipo_produto: 'MQT',
  },
  {
    codigo_produto: '27',
    descricao: 'Michele',
    ncm: 'SA23 281V KNPP MELP MYDK 4PTR',
    unidade_medida: 'III',
    peso_liquido: 27,
    tipo_produto: 'RENN',
  },
  {
    codigo_produto: '28',
    descricao: 'Cloe',
    ncm: 'MU15 VBCJ 0507 7946 9857 7918 059B OU',
    unidade_medida: 'II',
    peso_liquido: 28,
    tipo_produto: 'SNH',
  },
  {
    codigo_produto: '29',
    descricao: 'Samara',
    ncm: 'ES25 9537 2383 1788 6821 7514',
    unidade_medida: 'III',
    peso_liquido: 29,
    tipo_produto: 'LSTR',
  },
  {
    codigo_produto: '30',
    descricao: 'Magnum',
    ncm: 'ES35 5678 2214 1656 2607 4706',
    unidade_medida: 'Sr',
    peso_liquido: 30,
    tipo_produto: 'AIF',
  },
  {
    codigo_produto: '31',
    descricao: 'Becca',
    ncm: 'GR12 5440 528G 65QW 6RAQ NVQH KA2',
    unidade_medida: 'III',
    peso_liquido: 31,
    tipo_produto: 'CRI',
  },
  {
    codigo_produto: '32',
    descricao: 'Vernen',
    ncm: 'GL70 5884 2711 8539 73',
    unidade_medida: 'II',
    peso_liquido: 32,
    tipo_produto: 'VRTS',
  },
  {
    codigo_produto: '33',
    descricao: 'Melodee',
    ncm: 'SA71 55N5 WXHA 6NOZ L8NR GZ4H',
    unidade_medida: 'II',
    peso_liquido: 33,
    tipo_produto: 'PNNT',
  },
  {
    codigo_produto: '34',
    descricao: 'Alexine',
    ncm: 'CY14 1542 5947 LP3T PVHH MDBI N6RO',
    unidade_medida: 'Jr',
    peso_liquido: 34,
    tipo_produto: 'SFA',
  },
  {
    codigo_produto: '35',
    descricao: 'Dilly',
    ncm: 'GR33 3695 5245 AGRT Q9OZ FUMV J8O',
    unidade_medida: 'IV',
    peso_liquido: 35,
    tipo_produto: 'ARED',
  },
  {
    codigo_produto: '36',
    descricao: 'Kiri',
    ncm: 'IT95 N946 4451 100B WY8A 3GWN 7UM',
    unidade_medida: 'Jr',
    peso_liquido: 36,
    tipo_produto: 'OAKS',
  },
  {
    codigo_produto: '37',
    descricao: 'Benoit',
    ncm: 'AD69 9187 9792 3J7S TKZQ HCOV',
    unidade_medida: 'IV',
    peso_liquido: 37,
    tipo_produto: 'NLST',
  },
  {
    codigo_produto: '38',
    descricao: 'Brandi',
    ncm: 'LI72 3327 7DW2 RPVL ZOD0 J',
    unidade_medida: 'Sr',
    peso_liquido: 38,
    tipo_produto: 'AKR',
  },
  {
    codigo_produto: '39',
    descricao: 'Derrick',
    ncm: 'TN29 1771 7033 7004 4303 6827',
    unidade_medida: 'IV',
    peso_liquido: 39,
    tipo_produto: 'SKX',
  },
  {
    codigo_produto: '40',
    descricao: 'Waylan',
    ncm: 'RS29 5360 2420 0554 1335 48',
    unidade_medida: 'IV',
    peso_liquido: 40,
    tipo_produto: 'ARR',
  },
  {
    codigo_produto: '41',
    descricao: 'Maurits',
    ncm: 'PK28 ZYXK MSVW WNOX XXW8 KIHX',
    unidade_medida: 'III',
    peso_liquido: 41,
    tipo_produto: 'EVC',
  },
  {
    codigo_produto: '42',
    descricao: 'Ora',
    ncm: 'LT19 4641 2320 2876 0098',
    unidade_medida: 'IV',
    peso_liquido: 42,
    tipo_produto: 'GDV',
  },
  {
    codigo_produto: '43',
    descricao: 'Gipsy',
    ncm: 'NO32 5337 7656 589',
    unidade_medida: 'II',
    peso_liquido: 43,
    tipo_produto: 'CLSD',
  },
  {
    codigo_produto: '44',
    descricao: 'Nap',
    ncm: 'GL45 3500 8607 2831 06',
    unidade_medida: 'Sr',
    peso_liquido: 44,
    tipo_produto: 'BEAT',
  },
  {
    codigo_produto: '45',
    descricao: 'Hetty',
    ncm: 'LI85 9448 1X4J M4LI 6K9V O',
    unidade_medida: 'II',
    peso_liquido: 45,
    tipo_produto: 'INND',
  },
  {
    codigo_produto: '46',
    descricao: 'Stesha',
    ncm: 'RS88 5522 1392 4254 3044 56',
    unidade_medida: 'Sr',
    peso_liquido: 46,
    tipo_produto: 'MSA',
  },
  {
    codigo_produto: '47',
    descricao: 'Radcliffe',
    ncm: 'FR35 1124 6951 53I5 XCXG YGEK B57',
    unidade_medida: 'IV',
    peso_liquido: 47,
    tipo_produto: 'EVGBC',
  },
  {
    codigo_produto: '48',
    descricao: 'Tova',
    ncm: 'GB48 YECL 3908 9747 3440 23',
    unidade_medida: 'III',
    peso_liquido: 48,
    tipo_produto: 'GABH',
  },
  {
    codigo_produto: '49',
    descricao: 'Fannie',
    ncm: 'FR15 6217 9574 03QP 1EH6 QKJM A73',
    unidade_medida: 'III',
    peso_liquido: 49,
    tipo_produto: 'BCX',
  },
  {
    codigo_produto: '50',
    descricao: 'Lidia',
    ncm: 'KW78 NUIK G39A M3UB AQ88 WJCA KWMS UJ',
    unidade_medida: 'Sr',
    peso_liquido: 50,
    tipo_produto: 'UBPF',
  },
];

// export const headCells: Column[] = [
//   {
//     id: 'actions',
//     label: 'Ações',
//     minWidth: 20,
//     align: 'center',
//     disableSorting: true,
//   },
//   {
//     id: 'codigo_produto',
//     label: 'Código Produto',
//     minWidth: 120,
//     align: 'left',
//   },
//   {
//     id: 'descricao',
//     label: 'Descrição',
//     minWidth: 120,
//     align: 'left',
//   },
//   {
//     id: 'ncm',
//     label: 'N.C.M',
//     minWidth: 120,
//     align: 'left',
//   },
//   {
//     id: 'unidade_medida',
//     label: 'UM',
//     minWidth: 120,
//     align: 'left',
//   },
//   {
//     id: 'peso_liquido',
//     label: 'Peso Liquido',
//     minWidth: 120,
//     align: 'right',
//   },
//   {
//     id: 'tipo_produto',
//     label: 'Tipo de Produto',
//     minWidth: 120,
//     align: 'left',
//   },
// ];

// export const cargaProduto = [
//   {
//     codigo_produto:" '000001',
//     descricao: 'Produto 0001 Teste',
//     ncm: '8888.00.11',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000003',
//     descricao: 'Produto 0002 Teste',
//     ncm: '8888.00.12',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000004',
//     descricao: 'Produto 0003 Teste',
//     ncm: '8888.00.13',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000005',
//     descricao: 'Produto 0004 Teste',
//     ncm: '8888.00.14',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000006',
//     descricao: 'Produto 0005 Teste',
//     ncm: '8888.00.15',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000007',
//     descricao: 'Produto 0006 Teste',
//     ncm: '8888.00.16',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000008',
//     descricao: 'Produto 0007 Teste',
//     ncm: '8888.00.17',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000009',
//     descricao: 'Produto 0008 Teste',
//     ncm: '8888.00.18',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000010',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000011',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000012',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000013',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000014',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000015',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000010',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000010',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000010',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000010',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000010',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000010',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000010',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000010',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000010',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000010',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000010',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000010',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
//   {
//     codigo_produto:" '000010',
//     descricao: 'Produto 0009 Teste',
//     ncm: '8888.00.19',
//     unidade_medida: 'UN',
//     peso_liquido: 2,
//     tipo_produto: 'MP',
//   },
// ];
