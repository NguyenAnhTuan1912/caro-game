// Import from components
import Button from 'src/components/button/Button';
import Layer from 'src/components/layer/Layer';

// Import hooks
import { useLangState } from 'src/hooks/useLang';

// Locally Import
import { PauseGameLayerProps } from '../Game.props';

/**
 * Component renders a pause game layer.
 * @param props 
 * @returns 
 */
export default function PauseGameLayer(props: PauseGameLayerProps) {
  const { langTextJSON } = useLangState();

  return (
    <Layer>
      <Button
        isTransparent
        hasBorder={false}
        hasPadding={false}
        onClick={() => {
          if(!props.canResume) return;
        }}
      >
        <span className="material-symbols-outlined fs-xl txt-clr-background">play_arrow</span>
      </Button>
      <p className="fs-xl txt-clr-background ms-2">
        {
          props.text ? props.text : langTextJSON.global.pauseGameText
        }
      </p>
    </Layer>
  )
}
