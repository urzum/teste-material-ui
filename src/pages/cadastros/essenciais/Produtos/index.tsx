import React from 'react';
import DvrIcon from '@material-ui/icons/Dvr';
import MainContent from '../../../../components/MainContent';
import TopContent from '../../../../components/TopContent';

const Produtos: React.FC = () => {
  const pathBread = ['Cadastros', 'Essenciais'];
  const pathPage = 'Produtos';

  return (
    <MainContent>
      <TopContent
        breadcrumb={pathBread}
        description="Produtos"
        icon={DvrIcon}
      />
    </MainContent>
  );
};

export default Produtos;
