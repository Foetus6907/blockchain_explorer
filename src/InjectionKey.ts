import { InjectionKey } from "vue";
import BitcoinChainUseCase from "../core/domaine/useCase/BitcoinChainUseCase";

export const BitcoinChainUseCaseKey = Symbol() as InjectionKey<BitcoinChainUseCase>;
