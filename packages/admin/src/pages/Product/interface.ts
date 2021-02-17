import { RouteComponentProps } from 'react-router';
import { WrapperAuthProps } from '@src/components/HOC/loginWrapper/interface';

export interface ProductProps extends RouteComponentProps, WrapperAuthProps {}
