import { Usage } from '@/types/testCase';
import { FC } from 'react';
import { Center, Flexbox } from 'react-layout-kit';
import { TestSuit } from './TestSuit';

interface TestResultProps {
  usages: Usage[];
  pathPrefix: string;
}
export const TestResult: FC<TestResultProps> = ({ usages, pathPrefix }) => {
  return (
    <Flexbox gap={24}>
      {usages.map((item) => (
        <Flexbox key={item.name} horizontal gap={24}>
          <Center width={100} style={{ flexShrink: 0 }}>
            {item.name}
          </Center>
          <Flexbox
            horizontal
            gap={8}
            style={{ maxWidth: '100vw', overflowY: 'scroll' }}
          >
            {item.cases.map((testCase) => (
              <TestSuit
                key={testCase.name}
                name={testCase.name}
                path={testCase.path}
                Component={testCase.component}
                pathPrefix={pathPrefix}
              />
            ))}
          </Flexbox>
        </Flexbox>
      ))}
    </Flexbox>
  );
};
