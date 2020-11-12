import { demoMapDispatch, demoMapState } from '@src/pages/demo/connectData';

type StateProps = ReturnType<typeof demoMapState>
type DispatchProps = ReturnType<typeof demoMapDispatch>

export interface DemoBaseProps {

}

export interface DemoProps extends StateProps, DispatchProps, DemoBaseProps {

}
