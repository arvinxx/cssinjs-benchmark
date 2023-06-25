import { Usage } from '@/types/testCase';
import { FC } from 'react';
import { Center, Flexbox } from 'react-layout-kit';
import { TestSuit } from './TestSuit';

interface TestResultProps {
  usages: Usage[];
}
export const TestResult: FC<TestResultProps> = ({ usages }) => {
  return (
    <Flexbox gap={24}>
      {usages.map((item) => (
        <Flexbox key={item.name} horizontal gap={24}>
          <Center width={100}>{item.name}</Center>
          <Flexbox horizontal gap={8}>
            {item.cases.map((testCase) => (
              <TestSuit
                key={testCase.name}
                name={testCase.name}
                path={testCase.path}
                Component={testCase.component}
              />
            ))}
          </Flexbox>
        </Flexbox>
      ))}
    </Flexbox>
  );
};
