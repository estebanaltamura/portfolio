import { useContext } from 'react';
import { CurrentProyectSelectedContext } from '../../contexts/CurrentProyectSelectedContextProvider';
import { PreviewItem } from './PreviewItem';
import './PreviewsList.css';

export const PreviewsList = ({ isLoading }) => {
  const { currentProyectSelected } = useContext(CurrentProyectSelectedContext);

  return (
    <>
      <div
        className={isLoading === true ? 'hidden' : 'previewsList'}
        key={currentProyectSelected.name}
      >
        <PreviewItem
          type='mobile'
          media={currentProyectSelected.project.mobilePreviews}
        />
        <p className='previewTitleMobile'>Mobile</p>
        <PreviewItem
          type='desktop'
          media={currentProyectSelected.project.desktopPreviews}
        />
        <p className='previewTitleDesktop'>Desktop</p>
      </div>
      <p
        className={
          currentProyectSelected.project.name === 'Plumarii'
            ? 'hidden'
            : 'noDesktopPreviewMessage'
        }
      >
        *La preview version desktop de este proyecto se puede ver en el
        portfolio en su version de escritorio
      </p>
    </>
  );
};

//previewsList
