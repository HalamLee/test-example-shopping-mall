import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

it('className prop으로 설정한 css class가 적용된다.', async () => {
  await render(<TextField className="my-class" />);

  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  screen.debug();

  expect(textInput).toHaveClass('my-class');
});

// describe를 이용한 비슷한 테스트 그룹화 => 가독성이 좋아짐, 해당 그룹에만 함수를 적용시킬 수도 있음
describe('placeholder', () => {
  it('기본 placeholder "텍스트를 입력해 주세요."가 노출된다.', async () => {
    // 기대결과 === 실제 결과 -> 성공
    // 기대결과 !== 실제 결과 -> 실패
    await render(<TextField />);

    const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    screen.debug();

    expect(textInput).toBeInTheDocument();
    // 단언(assertion) -> 테스트가 통과하기 위한 조건 -> 검증 실행
  });

  it('placeholder prop에 따라 placeholder가 변경된다.', async () => {
    await render(<TextField placeholder="상품명을 입력해 주세요." />);

    const textInput = screen.getByPlaceholderText('상품명을 입력해 주세요.');

    expect(textInput).toBeInTheDocument();
  });
});
