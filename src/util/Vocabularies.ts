import  { createVocabulary } from "@solid/community-server"

export const SH = createVocabulary('http://www.w3.org/ns/shacl#',
  'targetClass',
);


export const LDP = createVocabulary('http://www.w3.org/ns/ldp#',
  'contains',

  'BasicContainer',
  'Container',
  'Resource',
  'constrainedBy',
);
