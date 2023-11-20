import { useRoute } from '@react-navigation/native';
import { testGPT } from 'api/gpt';
import format from 'pretty-format';
import { useEffect, useState } from 'react';

const useGpt = () => {
  const { age, gender } = useRoute().params;

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [answer, setAnswer] = useState('입력 값 없음');
  const genderIndex = 1;
  const ageIndex = 3;
  const menus = [
    '아메리카노',
    '카페라떼',
    '바닐라라떼',
    '헤이즐넛라떼',
    '카페모카',
    '아인슈페너',
    '초코라떼',
    '그린티라떼',
    '곡물라떼',
    '고구마라떼',
    '딸기라떼',
    '자몽에이드',
    '레몬에이드',
    '패션후르츠에이드',
    '얼그레이티',
    '녹차',
    '밀크티',
    '자몽차',
    '유자차',
    '딸기스무디',
    '망고스무디',
    '요거트스무디',
    '녹차프라페',
    '자바칩프라페',
  ];

  const recommend_num = 5;

  const query = `${menus.join(
    ', ',
  )} 중에서 ${age}층 ${gender}이 좋아할만한 카페메뉴를 추천해줘. 답변은 설명 없이 ["메뉴1", "메뉴2", "메뉴3", ...] 형식으로 ${recommend_num}개 작성해줘`;
  console.log(query);
  useEffect(() => {
    const getAnswer = async (question) => {
      setAnswer('입력 값 없음');
      try {
        const response = await testGPT(question);
        console.log(format(response));
        setAnswer(response.choices[0].message.content);
        setIsLoading(false);
        setIsError(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      }
    };
    setIsLoading(true);
    getAnswer(query);
  }, [query]);

  return { answer, isLoading, isError };
};

export default useGpt;
