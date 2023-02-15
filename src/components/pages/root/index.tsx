import { Accordion, Box, Divider, List, Space, Text } from '@mantine/core';
import type { FC } from 'react';

import { BoxWithTitle } from '@/components/common/BoxWithTitle';

export const Root: FC = () => {
  return (
    <>
      <Box>
        <Text>
          家があること・家族がいること・学校に行けること。私たちの生活には、いろいろな
          <span className="font-bold">「当たり前」</span>が潜んでいます。
        </Text>
        <Text>でも、『それって本当に当たり前ですか？』</Text>
        <Text>そんな疑問を持つ方の手助けとなることを願って。</Text>
      </Box>

      <Space h="xl" />

      <Box>
        <Text weight="bold">
          私たち、同志社大学宮崎ゼミ26期は
          <br />
          何か確信的なことを起こすには、今までになかったもの、つまり「seeds」を探し出し当たり前を覆すようなことだと考えました。
        </Text>
      </Box>
      <Space h="xl" />
      <Divider />

      <BoxWithTitle title="本論">
        <div>
          <Accordion defaultValue="customization" variant="filled">
            <Accordion.Item value="検証の流れ・方法">
              <Accordion.Control>
                <Text weight="bold">検証の流れ・方法</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <List listStyleType="number">
                  <List.Item>
                    先生からの宿題
                    <List>
                      <List.Item>各個人で10個の当たり前について提示</List.Item>
                    </List>
                  </List.Item>
                  <List.Item>
                    グループ活動
                    <List>
                      <List.Item>
                        4人×6グループに分かれて当たり前について考察
                      </List.Item>
                    </List>
                  </List.Item>
                  <List.Item>
                    結論へのアプローチ
                    <List listStyleType="disc">
                      <List.Item>具体→抽象</List.Item>
                      <List.Item>
                        各班で当たり前の項目を出す際の大枠であるコンテンツを決める
                      </List.Item>
                      <List.Item>
                        コンテンツ内の当たり前について共通認識であるか確認
                      </List.Item>
                      <List.Item>
                        当たり前の度合いをグラデーション状に並べる
                      </List.Item>
                      <List.Item>
                        全員一致の当たり前について、共通性から新しく抽象化をする
                      </List.Item>
                      <List.Item>
                        ☆当たり前の項目を挙げたうえで共通部分を見つける方法
                      </List.Item>
                    </List>
                  </List.Item>
                  <List.Item>結論の定義とコンテンツの作成</List.Item>
                  <List.Item>
                    2つの方法に分かれて分析
                    <List listStyleType="disc">
                      異なる方法からでも同じ答えにたどり着けるのかを確認するために二通りの方法に分けて当たり前について分析
                      <List.Item>抽象→具体</List.Item>
                      <List.Item>各班であたりまえの（仮）定義する</List.Item>
                      <List.Item>
                        その定義が正しいのかを検証、議論する
                      </List.Item>
                      <List.Item>
                        その検証の結論をだす この一連の流れを繰り返す
                      </List.Item>
                    </List>
                  </List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="シーズを見つける意義・方法">
              <Accordion.Control>
                <Text weight="bold">シーズを見つける意義・方法</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  まだ見ぬ需要を作り出すために必要なこととはなんでしょうか。
                  <br />
                  これまでの当たり前を覆すようなアイデアの種であり、何もないところから新たな価値を作り出すことが「seeds」です。
                  <br />
                  seedsを見つけるためには、当たり前を見つめ直すことが重要となります。本をネット上で読めるようにすることは誰でも思いつくことです。
                  <br />
                  私たちは宮崎ゼミ生です。「ITがわかるビジネスパーソン」としては目に見える（顕在的な）当たり前と、意識しない（潜在的な）当たり前のうち、潜在的な当たり前をseedsとすることで核心的な価値を想像していきます。
                  <br />
                  これから必要なのは当たり前に注目してseedsを見つける姿勢です。
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <List listStyleType="number">
            ☆考えうる当たり前の定義を複数あげて検証することを繰り返す
            <List.Item>
              コンテンツの再定義
              <List>
                <List.Item>
                  グループごとの当たり前のコンテンツの大きさを統一
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              2次元化→3次元化
              <List listStyleType="disc">
                <List.Item>当たり前の物事を時間軸で見て考える</List.Item>
                <List.Item>
                  当たり前として普及され始めた期間や年数がカテゴリの中でも違うので、そこを時間軸(3次元化)で考えて比較した
                </List.Item>
              </List>
            </List.Item>
          </List>
        </div>
      </BoxWithTitle>
    </>
  );
};
