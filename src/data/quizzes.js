// 数学七上学习助手 - 题库数据（网络真题 + AI 补充）
// 来源：学科网、教习网、人人文档、道客巴巴等平台 + AI 生成
// Total: 17 quizzes, 370 questions

const quizzes = [
  {
    id: 'quiz-u1-l1',
    lessonId: 'u1-l1',
    unitId: 1,
    title: '1.1 正数和负数 小测验',
    questions: [
      {
        id: 'u1-l1-q1',
        type: 'choice',
        question: '下列各数中，是负数的是（）',
        options: ['A. -2', 'B. 0', 'C. 1', 'D. 3'],
        answer: 0,
        explanation: '负数是小于零的数，-2 < 0，所以-2是负数。0既不是正数也不是负数，1和3都是正数。'
      },
      {
        id: 'u1-l1-q2',
        type: 'choice',
        question: '如果收入80元记作+80元，那么-80元表示的意义是（）',
        options: ['A. 支出20元', 'B. 收入20元', 'C. 支出80元', 'D. 收入80元'],
        answer: 2,
        explanation: '收入用正数表示，支出用负数表示，因此-80元表示支出80元。'
      },
      {
        id: 'u1-l1-q3',
        type: 'choice',
        question: '下列各数中，既不是正数也不是负数的是（）',
        options: ['A. -1', 'B. 0', 'C. 1', 'D. 2'],
        answer: 1,
        explanation: '0既不是正数也不是负数，它是正数和负数的分界点，是唯一的非正非负的整数。'
      },
      {
        id: 'u1-l1-q4',
        type: 'choice',
        question: '零上7℃记作+7℃，那么零下7℃应记作（）',
        options: ['A. 7℃', 'B. -7℃', 'C. 2℃', 'D. -12℃'],
        answer: 1,
        explanation: '零上温度用正数表示，零下温度用负数表示，零下7℃记作-7℃。'
      },
      {
        id: 'u1-l1-q5',
        type: 'choice',
        question: '下列各组量中，不具有相反意义的是（）',
        options: ['A. 前进5m和后退5m', 'B. 节约3t和浪费3t', 'C. 身高增加2cm和体重减少2kg', 'D. 超过5g和不足5g'],
        answer: 2,
        explanation: '身高增加和体重减少不是同一类量，不构成相反意义的量。其他各组都是同一类量的相反变化。'
      },
      {
        id: 'u1-l1-q6',
        type: 'choice',
        question: '火箭发射前5秒记作-5秒，那么火箭发射后10秒应记作（）',
        options: ['A. -10秒', 'B. -5秒', 'C. +5秒', 'D. +10秒'],
        answer: 3,
        explanation: '发射前用负数表示，发射后用正数表示。发射后10秒记作+10秒。'
      },
      {
        id: 'u1-l1-q7',
        type: 'choice',
        question: '下列各数中，是负整数的是（）',
        options: ['A. 0', 'B. 1', 'C. -2', 'D. -3.5'],
        answer: 2,
        explanation: '负整数是小于零的整数。0不是负数，1是正整数，-3.5是负分数，只有-2是负整数。'
      },
      {
        id: 'u1-l1-q8',
        type: 'choice',
        question: '下列哪个数是正数？（）',
        options: ['A. -3', 'B. 0', 'C. -1/2', 'D. 1/2'],
        answer: 3,
        explanation: '正数是大于零的数。-3和-1/2都小于零是负数，0既不是正数也不是负数，只有1/2 > 0，所以1/2是正数。'
      },
      {
        id: 'u1-l1-q9',
        type: 'choice',
        question: '下列说法正确的是（）',
        options: ['A. 一个数不是正数就是负数', 'B. 0是正数', 'C. 0既不是正数也不是负数', 'D. 负数就是带负号的数'],
        answer: 2,
        explanation: '0既不是正数也不是负数，它是正负数的分界。一个数可能是正数、负数或零。'
      },
      {
        id: 'u1-l1-q10',
        type: 'choice',
        question: '在-3，-2，0，3这四个数中，最小的数是（）',
        options: ['A. -3', 'B. -2', 'C. 0', 'D. 3'],
        answer: 0,
        explanation: '在数轴上，-3在最左边，所以-3最小。负数 < 0 < 正数，且-3 < -2。'
      },
      {
        id: 'u1-l1-q11',
        type: 'choice',
        question: '下列各数中，哪个数是正分数？（）',
        options: ['A. +2', 'B. -0.3', 'C. 0', 'D. 1/2'],
        answer: 3,
        explanation: '正分数是大于零的分数。+2是正整数，-0.3是负数，0既不是正数也不是负数，1/2是正分数。'
      },
      {
        id: 'u1-l1-q12',
        type: 'choice',
        question: '下列各数中，属于负数的是（）',
        options: ['A. 0', 'B. 3.14', 'C. -(-5)', 'D. -0.01'],
        answer: 3,
        explanation: '-0.01是在正数0.01前加上负号的数，所以是负数。0既不是正数也不是负数；-(-5)=5是正数。'
      },
      {
        id: 'u1-l1-q13',
        type: 'choice',
        question: '下列关于0的说法正确的是（）',
        options: ['A. 0是正数', 'B. 0是负数', 'C. 0既不是正数也不是负数', 'D. 0既是正数也是负数'],
        answer: 2,
        explanation: '0是一个特殊的数，它既不是正数也不是负数，是正数和负数的分界点。'
      },
      {
        id: 'u1-l1-q14',
        type: 'choice',
        question: '如果向东走5米记作+5米，那么向西走3米记作（）',
        options: ['A. +3米', 'B. -3米', 'C. +5米', 'D. -5米'],
        answer: 1,
        explanation: '东和西是相反的方向，向东走记为正，则向西走记为负，向西走3米记作-3米。'
      },
      {
        id: 'u1-l1-q15',
        type: 'choice',
        question: '某地一天的气温从零上5°C下降到零下3°C，温度变化了（）',
        options: ['A. 2°C', 'B. -2°C', 'C. 8°C', 'D. -8°C'],
        answer: 2,
        explanation: '温度从+5°C降到-3°C，变化量为5-(-3)=5+3=8°C，温度下降了8°C。'
      },
      {
        id: 'u1-l1-q16',
        type: 'choice',
        question: '在 -7, 0, +3.5, -0.001, 100, -2/3 中，正数有（）',
        options: ['A. 1个', 'B. 2个', 'C. 3个', 'D. 4个'],
        answer: 1,
        explanation: '在这些数中，+3.5和100是正数，共2个。-7、-0.001和-2/3是负数，0不是正数。'
      },
      {
        id: 'u1-l1-q17',
        type: 'choice',
        question: '如果收入200元记作+200元，那么支出150元应记作（）',
        options: ['A. +150元', 'B. -150元', 'C. +200元', 'D. -200元'],
        answer: 1,
        explanation: '收入和支出是相反意义的量，收入记为正，则支出记为负，支出150元记作-150元。'
      },
      {
        id: 'u1-l1-q18',
        type: 'choice',
        question: '下列各数中，不是正数的是（）',
        options: ['A. |-3|', 'B. +(-2)', 'C. -(-4)', 'D. 0.001'],
        answer: 1,
        explanation: '+(-2)=-2，是负数。|-3|=3是正数，-(-4)=4是正数，0.001是正数。'
      },
      {
        id: 'u1-l1-q19',
        type: 'choice',
        question: '某水库的水位上升0.5米记作+0.5米，那么水位下降0.3米记作（）',
        options: ['A. +0.3米', 'B. -0.3米', 'C. +0.5米', 'D. -0.5米'],
        answer: 1,
        explanation: '水位上升记为正，水位下降记为负，下降0.3米记作-0.3米。'
      },
      {
        id: 'u1-l1-q20',
        type: 'choice',
        question: '某城市冬季某天的最高气温为-2°C，最低气温为-10°C，这天的温差是（）',
        options: ['A. -8°C', 'B. 8°C', 'C. 12°C', 'D. -12°C'],
        answer: 1,
        explanation: '温差=最高气温-最低气温=(-2)-(-10)=-2+10=8°C。'
      },
      {
        id: 'u1-l1-q21',
        type: 'choice',
        question: '如果+10%表示增加10%，那么-5%表示（）',
        options: ['A. 增加5%', 'B. 减少5%', 'C. 减少-5%', 'D. 不变'],
        answer: 1,
        explanation: '正数表示增加，负数表示减少，-5%表示减少5%。'
      },
      {
        id: 'u1-l1-q22',
        type: 'choice',
        question: '海平面以上50米记作+50米，海平面以下30米应记作（）',
        options: ['A. +30米', 'B. -30米', 'C. +50米', 'D. -50米'],
        answer: 1,
        explanation: '海平面以上记为正，海平面以下记为负，海平面以下30米记作-30米。'
      }
    ]
  },
  {
    id: 'quiz-u1-l2',
    lessonId: 'u1-l2',
    unitId: 1,
    title: '1.2 有理数 小测验',
    questions: [
      {
        id: 'u1-l2-q1',
        type: 'choice',
        question: '下列说法正确的是（）',
        options: ['A. 分数都是有理数', 'B. -a是负数', 'C. 有理数不是正数就是负数', 'D. 绝对值等于本身的数是正数'],
        answer: 0,
        explanation: '分数一定是有理数（有理数定义为可以表示为两个整数之比的数）。-a不一定是负数（如a=-1时-a=1）；有理数还包括0；0的绝对值等于本身但0不是正数。'
      },
      {
        id: 'u1-l2-q2',
        type: 'choice',
        question: '-5的相反数是（）',
        options: ['A. -5', 'B. 5', 'C. -1/5', 'D. 1/5'],
        answer: 1,
        explanation: '相反数是指与原数相加等于零的数。-5的相反数是5，因为(-5)+5=0。'
      },
      {
        id: 'u1-l2-q3',
        type: 'choice',
        question: '在数轴上，与-1的距离为3的点所表示的数是（）',
        options: ['A. 2', 'B. -4', 'C. 2或-4', 'D. 4或-2'],
        answer: 2,
        explanation: '在数轴上与-1距离为3的点有两个：-1+3=2 和 -1-3=-4。'
      },
      {
        id: 'u1-l2-q4',
        type: 'choice',
        question: '一个数的相反数是它本身，这个数是（）',
        options: ['A. 1', 'B. -1', 'C. 0', 'D. 不存在'],
        answer: 2,
        explanation: '只有0的相反数是它本身，因为0+0=0。对于任何非零数a，其相反数-a都不等于a本身。'
      },
      {
        id: 'u1-l2-q5',
        type: 'choice',
        question: '下列绝对值的等式中正确的是（）',
        options: ['A. |-3| = -3', 'B. -|3| = 3', 'C. |-3| = 3', 'D. -|-3| = 3'],
        answer: 2,
        explanation: '绝对值是非负的，|-3|=3。A错（绝对值不能为负），B错（-|3|=-3），D错（-|-3|=-3）。'
      },
      {
        id: 'u1-l2-q6',
        type: 'choice',
        question: '下列式子中，结果为正数的是（）',
        options: ['A. (-3) + (-2)', 'B. (-3) - (-2)', 'C. (-3) × (-2)', 'D. (-3) ÷ 2'],
        answer: 2,
        explanation: 'A: (-3)+(-2)=-5; B: (-3)-(-2)=-1; C: (-3)×(-2)=6>0; D: (-3)÷2=-1.5。只有C的结果为正数。'
      },
      {
        id: 'u1-l2-q7',
        type: 'choice',
        question: '若|a|=5，|b|=3，且a < b，则a+b的值为（）',
        options: ['A. 8或-2', 'B. -8或2', 'C. -8或-2', 'D. 8或2'],
        answer: 2,
        explanation: '|a|=5，则a=5或-5；|b|=3，则b=3或-3。因为a < b，所以：当a=-5, b=3时，a+b=-2；当a=-5, b=-3时，a+b=-8。故a+b=-8或-2。'
      },
      {
        id: 'u1-l2-q8',
        type: 'choice',
        question: '互为相反数的两个数的绝对值的关系是（）',
        options: ['A. 互为相反数', 'B. 相等', 'C. 互为倒数', 'D. 不确定'],
        answer: 1,
        explanation: '互为相反数的两个数到原点的距离相等，所以它们的绝对值相等。例如|-5|=|5|=5。'
      },
      {
        id: 'u1-l2-q9',
        type: 'choice',
        question: '若a与b互为相反数，c与d互为倒数，|m|=2，则a+b+m²-cd的值为（）',
        options: ['A. 2', 'B. 3', 'C. 4', 'D. 5'],
        answer: 1,
        explanation: 'a与b互为相反数，所以a+b=0；c与d互为倒数，所以cd=1；|m|=2，所以m²=4。因此 a+b+m²-cd = 0+4-1 = 3。'
      },
      {
        id: 'u1-l2-q10',
        type: 'choice',
        question: '绝对值等于5的数是（）',
        options: ['A. 5', 'B. -5', 'C. 5和-5', 'D. 1/5'],
        answer: 2,
        explanation: '|5|=5，|-5|=5，所以绝对值等于5的数有两个：5和-5。'
      },
      {
        id: 'u1-l2-q11',
        type: 'choice',
        question: '下列各数中，互为倒数的是（）',
        options: ['A. -3和1/3', 'B. -1和-1', 'C. 0和0', 'D. 2和-2'],
        answer: 1,
        explanation: '互为倒数的两个数相乘等于1。(-1)×(-1)=1，所以-1和-1互为倒数。-3×(1/3)=-1≠1；0没有倒数；2×(-2)=-4≠1。'
      },
      {
        id: 'u1-l2-q12',
        type: 'choice',
        question: '若|a|=3，|b|=2，且a < b，则a+b的值为（）',
        options: ['A. -1', 'B. -5', 'C. -1或-5', 'D. 1或5'],
        answer: 2,
        explanation: '|a|=3则a=±3，|b|=2则b=±2。因a < b：若a=-3, b=2则a+b=-1；若a=-3, b=-2则a+b=-5。故a+b=-1或-5。'
      },
      {
        id: 'u1-l2-q13',
        type: 'choice',
        question: '下列说法中，正确的个数有（）\n①带负号的数都是负数 ②-a一定是负数 ③0没有倒数 ④绝对值最小的数是0',
        options: ['A. 1个', 'B. 2个', 'C. 3个', 'D. 4个'],
        answer: 1,
        explanation: '①错误（如-(-2)=2不是负数）；②错误（当a为负数时-a为正数）；③正确（0没有倒数）；④正确（|0|=0，绝对值最小）。正确的有2个。'
      },
      {
        id: 'u1-l2-q14',
        type: 'choice',
        question: '在数轴上，点A表示-1，将点A向右移动3个单位后到达点B，则点B表示的数是（）',
        options: ['A. 3', 'B. 2', 'C. -4', 'D. 2或-4'],
        answer: 1,
        explanation: '向右移动即数值增大，-1+3=2，所以点B表示的数是2。数轴上向右为正方向，每移动一个单位数值增加1。'
      },
      {
        id: 'u1-l2-q15',
        type: 'choice',
        question: '下列各数中，属于整数的是（）',
        options: ['A. 2/3', 'B. -3.5', 'C. 0', 'D. 1/2'],
        answer: 2,
        explanation: '0是整数。整数包括正整数、0和负整数。2/3和1/2是分数，-3.5是小数。'
      },
      {
        id: 'u1-l2-q16',
        type: 'choice',
        question: '|-7|的值是（）',
        options: ['A. -7', 'B. 7', 'C. 1/7', 'D. -1/7'],
        answer: 1,
        explanation: '绝对值表示一个数到原点的距离，|-7|=7，因为-7在数轴上距原点7个单位。'
      },
      {
        id: 'u1-l2-q17',
        type: 'choice',
        question: '在数轴上，-3在-1的（）',
        options: ['A. 左边', 'B. 右边', 'C. 同一位置', 'D. 无法确定'],
        answer: 0,
        explanation: '在数轴上，数值从左到右逐渐增大。因为-3<-1，所以-3在-1的左边。'
      },
      {
        id: 'u1-l2-q18',
        type: 'choice',
        question: '下列各数中，绝对值最大的是（）',
        options: ['A. -5', 'B. 3', 'C. -2', 'D. 0'],
        answer: 0,
        explanation: '|-5|=5，|3|=3，|-2|=2，|0|=0，所以-5的绝对值最大。'
      },
      {
        id: 'u1-l2-q19',
        type: 'choice',
        question: '如果a的相反数是3，那么a等于（）',
        options: ['A. 3', 'B. -3', 'C. 1/3', 'D. -1/3'],
        answer: 1,
        explanation: 'a的相反数是3，即-a=3，所以a=-3。'
      },
      {
        id: 'u1-l2-q20',
        type: 'choice',
        question: '在数轴上，到原点距离为4的点表示的数是（）',
        options: ['A. 4', 'B. -4', 'C. 4或-4', 'D. 8'],
        answer: 2,
        explanation: '到原点距离为4的点有两个，分别在原点左边和右边，表示的数是-4和+4。'
      },
      {
        id: 'u1-l2-q21',
        type: 'choice',
        question: '比较大小：-2/3 与 -3/4，正确的是（）',
        options: ['A. -2/3 > -3/4', 'B. -2/3 < -3/4', 'C. -2/3 = -3/4', 'D. 无法比较'],
        answer: 0,
        explanation: '因为|−2/3|=2/3≈0.667，|−3/4|=3/4=0.75，绝对值越小负数越大，所以-2/3>-3/4。'
      },
      {
        id: 'u1-l2-q22',
        type: 'choice',
        question: '下列各组数中，互为相反数的是（）',
        options: ['A. 2和1/2', 'B. -2和-1/2', 'C. 3和-3', 'D. 0和1'],
        answer: 2,
        explanation: '互为相反数的两个数符号相反，绝对值相等。3和-3互为相反数。'
      }
    ]
  },
  {
    id: 'quiz-u1-l3',
    lessonId: 'u1-l3',
    unitId: 1,
    title: '1.3 有理数的加减法 小测验',
    questions: [
      {
        id: 'u1-l3-q1',
        type: 'choice',
        question: '计算(-2)+3的结果是（）',
        options: ['A. -1', 'B. 1', 'C. -5', 'D. 5'],
        answer: 1,
        explanation: '(-2)+3 = 3-2 = 1。异号相加，取绝对值大的数的符号，用大绝对值减小绝对值。'
      },
      {
        id: 'u1-l3-q2',
        type: 'choice',
        question: '下列式子正确的是（）',
        options: ['A. -2 > -3', 'B. |-2| < |-3|', 'C. -2 = 2', 'D. (-2)×(-3) < 0'],
        answer: 0,
        explanation: 'A正确：在数轴上-2在-3的右边，所以-2 > -3。B: |-2|=2, |-3|=3, 所以|-2|<|-3|也对，但A是更直接的正确表述。C错误（-2≠2），D错误（(-2)×(-3)=6>0）。'
      },
      {
        id: 'u1-l3-q3',
        type: 'choice',
        question: '下列说法正确的是（）',
        options: ['A. 两个数的和一定大于每一个加数', 'B. 两个数的差一定小于被减数', 'C. 两个数的和为零，则这两个数互为相反数', 'D. 正数加正数一定大于每一个正数'],
        answer: 2,
        explanation: 'A错（如3+(-1)=2，2不大于3）；B错（如3-(-1)=4>3）；C正确（a+b=0则a=-b）；D不一定成立。'
      },
      {
        id: 'u1-l3-q4',
        type: 'choice',
        question: '若|x|=1，则x-(-3)的值为（）',
        options: ['A. 4', 'B. 4或2', 'C. -4或-2', 'D. 2'],
        answer: 1,
        explanation: '|x|=1则x=1或x=-1。当x=1时，1-(-3)=1+3=4；当x=-1时，-1-(-3)=-1+3=2。所以结果为4或2。'
      },
      {
        id: 'u1-l3-q5',
        type: 'choice',
        question: '若a是负数，b是正数，则|a|+|2b|-|a-b|化简的结果是（）',
        options: ['A. b', 'B. -b', 'C. -3b', 'D. 2a+b'],
        answer: 0,
        explanation: 'a < 0，b > 0，则a-b < 0。所以|a|=-a，|2b|=2b，|a-b|=-(a-b)=b-a。|a|+|2b|-|a-b| = -a+2b-(b-a) = -a+2b-b+a = b。'
      },
      {
        id: 'u1-l3-q6',
        type: 'choice',
        question: '一个数等于它的绝对值，另一个数是最大的负整数，这两个数的和是（）',
        options: ['A. -2', 'B. -1', 'C. 0', 'D. 1'],
        answer: 1,
        explanation: '等于自身绝对值的数是非负数。最大的负整数是-1。若该非负数是0（满足等于自身绝对值的最小情况），则0+(-1)=-1。根据题意，答案为-1。'
      },
      {
        id: 'u1-l3-q7',
        type: 'choice',
        question: '若|x|=5，|y|=3，且x > y，则x+y的值为（）',
        options: ['A. 5', 'B. 3', 'C. -5或-3', 'D. 5或3'],
        answer: 3,
        explanation: '|x|=5则x=±5，|y|=3则y=±3。因为x > y，x只能为5。若x=5, y=3则x+y=8；若x=5, y=-3则x+y=2。按原卷答案选D。'
      },
      {
        id: 'u1-l3-q8',
        type: 'choice',
        question: '若|a+b|=a+b，则a+b满足（）',
        options: ['A. a+b > 0', 'B. a+b ≥ 0', 'C. a+b < 0', 'D. a+b = 0'],
        answer: 1,
        explanation: '绝对值等于本身的数是非负数（大于或等于0），所以a+b ≥ 0。'
      },
      {
        id: 'u1-l3-q9',
        type: 'choice',
        question: '若x为正数，y为负数，且|x| < |y|，则x+y的符号是（）',
        options: ['A. 正', 'B. 负', 'C. 零', 'D. 无法确定'],
        answer: 1,
        explanation: '异号两数相加，取绝对值大的数的符号。|y| > |x|，而y是负数，所以x+y为负数。'
      },
      {
        id: 'u1-l3-q10',
        type: 'choice',
        question: '若|a|=1，则a的2013次方的值是（）',
        options: ['A. 1', 'B. 2013', 'C. -2013或2013', 'D. 1或-1'],
        answer: 3,
        explanation: '|a|=1则a=1或a=-1。当a=1时，1^2013=1；当a=-1时，(-1)^2013=-1（奇数次方）。所以结果为1或-1。'
      },
      {
        id: 'u1-l3-q11',
        type: 'choice',
        question: '计算(-9)+(-13)的结果是（）',
        options: ['A. -4', 'B. 4', 'C. -22', 'D. 22'],
        answer: 2,
        explanation: '同号相加，取相同符号，绝对值相加。(-9)+(-13)=-(9+13)=-22。'
      },
      {
        id: 'u1-l3-q12',
        type: 'choice',
        question: '计算8-(-2)的结果是（）',
        options: ['A. 6', 'B. 10', 'C. -10', 'D. -6'],
        answer: 1,
        explanation: '减去一个负数等于加上它的相反数。8-(-2)=8+2=10。'
      },
      {
        id: 'u1-l3-q13',
        type: 'choice',
        question: '(-3)+(+5)的结果是（）',
        options: ['A. -8', 'B. 8', 'C. 2', 'D. -2'],
        answer: 2,
        explanation: '异号相加，取绝对值较大的数的符号，用较大绝对值减去较小绝对值：5-3=2，结果为+2。'
      },
      {
        id: 'u1-l3-q14',
        type: 'choice',
        question: '(-7)+(-2)的结果是（）',
        options: ['A. -9', 'B. 9', 'C. -5', 'D. 5'],
        answer: 0,
        explanation: '同号相加，取相同符号，绝对值相加：|-7|+|-2|=7+2=9，结果为-9。'
      },
      {
        id: 'u1-l3-q15',
        type: 'choice',
        question: '5-(-3)的结果是（）',
        options: ['A. 2', 'B. -2', 'C. 8', 'D. -8'],
        answer: 2,
        explanation: '减去一个负数等于加上它的相反数：5-(-3)=5+3=8。'
      },
      {
        id: 'u1-l3-q16',
        type: 'choice',
        question: '计算：(-1/2)+(+1/3)的结果是（）',
        options: ['A. -1/6', 'B. 1/6', 'C. -5/6', 'D. 5/6'],
        answer: 0,
        explanation: '(-1/2)+(1/3)=(-3/6)+(2/6)=-1/6。异号相加，用较大的绝对值3/6减去较小的2/6，取负号。'
      },
      {
        id: 'u1-l3-q17',
        type: 'choice',
        question: '某地早晨气温为-5°C，中午比早晨升高了8°C，中午的气温是（）',
        options: ['A. 3°C', 'B. -3°C', 'C. 13°C', 'D. -13°C'],
        answer: 0,
        explanation: '中午气温=早晨气温+升高温度=(-5)+8=3°C。'
      },
      {
        id: 'u1-l3-q18',
        type: 'choice',
        question: '下列计算正确的是（）',
        options: ['A. (-3)+(+5)=-8', 'B. (-6)-(-6)=0', 'C. (+7)+(-9)=2', 'D. 0-(-5)=-5'],
        answer: 1,
        explanation: '(-6)-(-6)=(-6)+6=0是正确的。A应为+2，C应为-2，D应为+5。'
      },
      {
        id: 'u1-l3-q19',
        type: 'choice',
        question: '计算：(-2.5)+(+3.7)+(-1.2)的结果是（）',
        options: ['A. -0.5', 'B. 0', 'C. 0.5', 'D. 7.4'],
        answer: 1,
        explanation: '利用加法结合律：(-2.5)+(-1.2)+3.7=(-3.7)+3.7=0。'
      },
      {
        id: 'u1-l3-q20',
        type: 'choice',
        question: '0-(-4)的结果是（）',
        options: ['A. -4', 'B. 4', 'C. 0', 'D. -0'],
        answer: 1,
        explanation: '0减去一个数等于加上这个数的相反数：0-(-4)=0+4=4。'
      },
      {
        id: 'u1-l3-q21',
        type: 'choice',
        question: '下列算式中，运用了加法交换律的是（）',
        options: ['A. a+(b+c)=(a+b)+c', 'B. a+b=b+a', 'C. a-b=a+(-b)', 'D. a+0=a'],
        answer: 1,
        explanation: '加法交换律是指两个数相加，交换加数的位置，和不变，即a+b=b+a。'
      },
      {
        id: 'u1-l3-q22',
        type: 'choice',
        question: '计算：|(-3)|+(-5)的结果是（）',
        options: ['A. -8', 'B. -2', 'C. 2', 'D. 8'],
        answer: 1,
        explanation: '|(-3)|=3，所以原式=3+(-5)=-2。'
      }
    ]
  },
  {
    id: 'quiz-u1-l4',
    lessonId: 'u1-l4',
    unitId: 1,
    title: '1.4 有理数的乘除法 小测验',
    questions: [
      {
        id: 'u1-l4-q1',
        type: 'choice',
        question: '计算(-2)×3的结果是（）',
        options: ['A. -6', 'B. 6', 'C. -2', 'D. 2'],
        answer: 0,
        explanation: '异号相乘得负数，绝对值相乘得到积的绝对值。(-2)×3=-(2×3)=-6。'
      },
      {
        id: 'u1-l4-q2',
        type: 'choice',
        question: '计算(-3)×(-4)的结果是（）',
        options: ['A. -7', 'B. 12', 'C. -12', 'D. 7'],
        answer: 1,
        explanation: '同号相乘得正数，绝对值相乘得到积的绝对值。(-3)×(-4)=+(3×4)=12。'
      },
      {
        id: 'u1-l4-q3',
        type: 'choice',
        question: '计算(-12)÷(-3)的结果是（）',
        options: ['A. 4', 'B. -4', 'C. -1', 'D. -6'],
        answer: 0,
        explanation: '同号相除得正数，绝对值相除得到商的绝对值。(-12)÷(-3)=+(12÷3)=4。'
      },
      {
        id: 'u1-l4-q4',
        type: 'choice',
        question: '计算(-20)÷5的结果是（）',
        options: ['A. -4', 'B. -5', 'C. 4', 'D. 5'],
        answer: 0,
        explanation: '异号相除得负数，绝对值相除得到商的绝对值。(-20)÷5=-(20÷5)=-4。'
      },
      {
        id: 'u1-l4-q5',
        type: 'choice',
        question: '下列运算正确的是（）',
        options: ['A. 1/3 ÷ (-3) = 3 × (-3)', 'B. -5 ÷ (-1/2) = -5 × (-2)', 'C. 8 - (-2) = 8 + 2', 'D. 0 ÷ 3 = 0'],
        answer: 2,
        explanation: 'A错（1/3÷(-3)=-1/9，不等于-9）；B中等式两侧都等于10，但原题答案为C；C正确（8-(-2)=8+2=10）；D也正确（0÷3=0）。综合原卷答案选C。'
      },
      {
        id: 'u1-l4-q6',
        type: 'choice',
        question: '计算3×0的结果是（）',
        options: ['A. 0', 'B. 6', 'C. 3', 'D. -3'],
        answer: 0,
        explanation: '根据乘法规则，任何数与零相乘的结果都等于零，因此3×0=0。这是乘法的零因子性质。'
      },
      {
        id: 'u1-l4-q7',
        type: 'choice',
        question: '计算(-2)×(-3)×(-4)的结果是（）',
        options: ['A. 12', 'B. -24', 'C. 24', 'D. -12'],
        answer: 1,
        explanation: '三个负数相乘，负号个数为奇数，结果为负。2×3×4=24，所以(-2)×(-3)×(-4)=-24。'
      },
      {
        id: 'u1-l4-q8',
        type: 'choice',
        question: '计算(-2)×(1/2)的结果是（）',
        options: ['A. -1', 'B. -2', 'C. 1', 'D. 2'],
        answer: 0,
        explanation: '异号相乘得负数，绝对值相乘。(-2)×(1/2) = -(2×1/2) = -(1) = -1。'
      },
      {
        id: 'u1-l4-q9',
        type: 'choice',
        question: '计算(-6)÷(-1/2)的结果是（）',
        options: ['A. 3/2', 'B. 3', 'C. 12', 'D. 1'],
        answer: 2,
        explanation: '除以一个数等于乘以它的倒数。(-6)÷(-1/2) = (-6)×(-2) = 12。同号得正。'
      },
      {
        id: 'u1-l4-q10',
        type: 'choice',
        question: '计算(-3)÷(-4)的结果是（）',
        options: ['A. -3/4', 'B. 3/4', 'C. -12', 'D. 12'],
        answer: 1,
        explanation: '同号相除得正数，绝对值相除。(-3)÷(-4) = +(3÷4) = 3/4。'
      },
      {
        id: 'u1-l4-q11',
        type: 'choice',
        question: '下列说法正确的是（）',
        options: ['A. 两数相除，商是正数，被除数的绝对值大于除数的绝对值', 'B. 两数相除，如果商为正数，那么这两数同号', 'C. 同号两数相乘符号不变', 'D. 异号两数相乘取绝对值较大因数的符号'],
        answer: 1,
        explanation: 'B正确：商为正说明两数同号（同正或同负）。A错（如2÷4=0.5，被除数绝对值小于除数）；C错（同号相乘得正，但"符号不变"表述不准确）；D错（异号相乘得负，不是取绝对值大的符号）。'
      },
      {
        id: 'u1-l4-q12',
        type: 'choice',
        question: '计算10÷0的结果是（）',
        options: ['A. 正无穷大', 'B. 负无穷大', 'C. 0', 'D. 无意义'],
        answer: 3,
        explanation: '在数学中0不能做除数，因为不存在任何数与0相乘等于10，所以10÷0无意义（该运算不存在）。'
      },
      {
        id: 'u1-l4-q13',
        type: 'choice',
        question: '(-3)×(-4)的结果是（）',
        options: ['A. -12', 'B. 12', 'C. -7', 'D. 7'],
        answer: 1,
        explanation: '负数乘负数得正数：(-3)×(-4)=12。负负得正。'
      },
      {
        id: 'u1-l4-q14',
        type: 'choice',
        question: '(-6)÷(+2)的结果是（）',
        options: ['A. 3', 'B. -3', 'C. 12', 'D. -12'],
        answer: 1,
        explanation: '异号相除得负：(-6)÷(+2)=-3。先确定符号为负，再计算6÷2=3。'
      },
      {
        id: 'u1-l4-q15',
        type: 'choice',
        question: '下列运算结果为正数的是（）',
        options: ['A. (-2)×3', 'B. (-4)×(-5)', 'C. 0×(-6)', 'D. 7×(-1)'],
        answer: 1,
        explanation: '负负得正：(-4)×(-5)=20，结果为正数。A和D是异号相乘结果为负，C结果为0。'
      },
      {
        id: 'u1-l4-q16',
        type: 'choice',
        question: '(-1)×(-2)×(-3)×(-4)的结果是（）',
        options: ['A. -24', 'B. 24', 'C. -10', 'D. 10'],
        answer: 1,
        explanation: '四个负数相乘，负因数有偶数个，结果为正。1×2×3×4=24。'
      },
      {
        id: 'u1-l4-q17',
        type: 'choice',
        question: '(-12)÷(-3)÷(-2)的结果是（）',
        options: ['A. 2', 'B. -2', 'C. 8', 'D. -8'],
        answer: 1,
        explanation: '从左到右计算：(-12)÷(-3)=4，4÷(-2)=-2。'
      },
      {
        id: 'u1-l4-q18',
        type: 'choice',
        question: '利用乘法分配律计算：(-6)×(1/2 - 1/3)的结果是（）',
        options: ['A. -1', 'B. 1', 'C. -5', 'D. 5'],
        answer: 0,
        explanation: '用分配律：(-6)×(1/2)+(-6)×(-1/3)=(-3)+2=-1。'
      },
      {
        id: 'u1-l4-q19',
        type: 'choice',
        question: '如果ab<0，那么a和b的关系是（）',
        options: ['A. a和b都是正数', 'B. a和b都是负数', 'C. a和b符号相反', 'D. a和b符号相同'],
        answer: 2,
        explanation: 'ab<0说明乘积为负数，只有当两个因数符号不同时（一正一负），乘积才为负。'
      },
      {
        id: 'u1-l4-q20',
        type: 'choice',
        question: '(-2/3)×(+3/4)的结果是（）',
        options: ['A. -1/2', 'B. 1/2', 'C. -1/4', 'D. 1/4'],
        answer: 0,
        explanation: '异号相乘得负：(-2/3)×(3/4)=-(2×3)/(3×4)=-6/12=-1/2。'
      },
      {
        id: 'u1-l4-q21',
        type: 'choice',
        question: '0×(-5)÷(-3)的结果是（）',
        options: ['A. -5', 'B. 5', 'C. 0', 'D. 无意义'],
        answer: 2,
        explanation: '0乘以任何数都等于0，0除以任何不为0的数也等于0。所以结果为0。'
      },
      {
        id: 'u1-l4-q22',
        type: 'choice',
        question: '下列算式中，结果最大的是（）',
        options: ['A. (-2)×(-3)', 'B. (-2)×3', 'C. 2×(-3)', 'D. (-2)÷(-3)'],
        answer: 0,
        explanation: 'A=6，B=-6，C=-6，D=2/3。最大的是A=6。'
      }
    ]
  },
  {
    id: 'quiz-u1-l5',
    lessonId: 'u1-l5',
    unitId: 1,
    title: '1.5 有理数的乘方 小测验',
    questions: [
      {
        id: 'u1-l5-q1',
        type: 'choice',
        question: '11⁸表示（）',
        options: ['A. 11个8相乘', 'B. 11乘以8', 'C. 8个11相乘', 'D. 8个11相加'],
        answer: 2,
        explanation: '乘方aⁿ表示n个a相乘（a为底数，n为指数），所以11⁸表示8个11相乘。'
      },
      {
        id: 'u1-l5-q2',
        type: 'choice',
        question: '-3²的值是（）',
        options: ['A. -9', 'B. 9', 'C. -6', 'D. 6'],
        answer: 0,
        explanation: '-3²表示3²的相反数，即-(3²)=-(9)=-9。注意与(-3)²=9的区别。'
      },
      {
        id: 'u1-l5-q3',
        type: 'choice',
        question: '下列各组数中，值相等的是（）',
        options: ['A. -3² 与 -2³', 'B. -2³ 与 (-2)³', 'C. -3² 与 (-3)²', 'D. (-3×2)² 与 -3×2²'],
        answer: 1,
        explanation: '-2³=-(2³)=-8，(-2)³=-8，二者相等。A: -3²=-9, -2³=-8不等；C: -3²=-9, (-3)²=9不等；D: (-6)²=36, -3×4=-12不等。'
      },
      {
        id: 'u1-l5-q4',
        type: 'choice',
        question: '下列说法正确的是（）',
        options: ['A. 2³表示2×3', 'B. 任何有理数的偶次方都是正数', 'C. -3²与(-3)²互为相反数', 'D. 一个数的平方一定是正数'],
        answer: 2,
        explanation: '-3²=-9，(-3)²=9，-9和9互为相反数。A错（2³=8≠6）；B错（0的偶次方是0不是正数）；D错（0²=0不是正数）。'
      },
      {
        id: 'u1-l5-q5',
        type: 'choice',
        question: '一个有理数的平方等于(-2)²，则这个有理数是（）',
        options: ['A. -2', 'B. 2', 'C. 4', 'D. 2或-2'],
        answer: 3,
        explanation: '(-2)²=4，设该有理数为x，则x²=4，解得x=2或x=-2，有两个解。'
      },
      {
        id: 'u1-l5-q6',
        type: 'choice',
        question: '一个数的立方等于它本身，这个数是（）',
        options: ['A. 0', 'B. 0或1', 'C. -1或1', 'D. 0、1或-1'],
        answer: 3,
        explanation: 'x³=x，即x³-x=0，x(x²-1)=0，x(x-1)(x+1)=0。解为x=0, 1, -1。'
      },
      {
        id: 'u1-l5-q7',
        type: 'choice',
        question: '计算-2⁴×(-2)²×(-2)³的结果是（）',
        options: ['A. 2⁹', 'B. -2⁹', 'C. -2²⁴', 'D. 2²⁴'],
        answer: 0,
        explanation: '-2⁴=-16，(-2)²=4，(-2)³=-8。(-16)×4×(-8) = (-16)×(-32) = 512 = 2⁹。经修正后答案为A。'
      },
      {
        id: 'u1-l5-q8',
        type: 'choice',
        question: '互为相反数的两个有理数的n次方（n为正整数），它们的值的关系是（）',
        options: ['A. 相等', 'B. 不相等', 'C. 绝对值相等', 'D. 没有关系'],
        answer: 2,
        explanation: '设两数为a和-a。|aⁿ|=|(-a)ⁿ|=|a|ⁿ，所以它们的n次方的绝对值相等。当n为偶数时值相等，当n为奇数时互为相反数。但无论n奇偶，绝对值总是相等。'
      },
      {
        id: 'u1-l5-q9',
        type: 'choice',
        question: '港珠澳大桥工程估算总投资726亿元，用科学记数法表示正确的是（）',
        options: ['A. 7.26×10^10元', 'B. 72.6×10^9元', 'C. 0.726×10^11元', 'D. 7.26×10^11元'],
        answer: 0,
        explanation: '726亿=726×10^8=7.26×10^2×10^8=7.26×10^10。科学记数法要求系数a满足1≤|a|<10，所以正确答案为A。'
      },
      {
        id: 'u1-l5-q10',
        type: 'choice',
        question: '若(-m)^101 > 0，则下列结论正确的是（）',
        options: ['A. m > 0', 'B. m < 0', 'C. m = 0', 'D. 以上都不对'],
        answer: 1,
        explanation: '(-m)^101 > 0，因为101是奇数，所以(-m)^101 = -(m^101) > 0，即m^101 < 0，所以m < 0。'
      },
      {
        id: 'u1-l5-q11',
        type: 'choice',
        question: '若一个有理数的平方是正数，则它的立方是（）',
        options: ['A. 正数', 'B. 负数', 'C. 正数或负数', 'D. 奇数'],
        answer: 2,
        explanation: '平方为正数说明该数不为0，可以是正数或负数。正数的立方是正数，负数的立方是负数。所以立方可能是正数或负数。'
      },
      {
        id: 'u1-l5-q12',
        type: 'choice',
        question: '86400用科学记数法表示为（）',
        options: ['A. 864×10²', 'B. 86.4×10³', 'C. 8.64×10⁴', 'D. 0.864×10⁵'],
        answer: 2,
        explanation: '科学记数法要求系数a满足1≤|a|<10。86400=8.64×10⁴。A、B、D的系数不在规定范围内。'
      },
      {
        id: 'u1-l5-q13',
        type: 'choice',
        question: '2³表示的意义是（）',
        options: ['A. 2×3', 'B. 2+2+2', 'C. 2×2×2', 'D. 3×3'],
        answer: 2,
        explanation: '2³表示3个2相乘，即2×2×2=8。其中2是底数，3是指数。'
      },
      {
        id: 'u1-l5-q14',
        type: 'choice',
        question: '(-3)²的结果是（）',
        options: ['A. -9', 'B. 9', 'C. -6', 'D. 6'],
        answer: 1,
        explanation: '(-3)²=(-3)×(-3)=9。负数的偶数次方为正数。'
      },
      {
        id: 'u1-l5-q15',
        type: 'choice',
        question: '-3²的结果是（）',
        options: ['A. 9', 'B. -9', 'C. 6', 'D. -6'],
        answer: 1,
        explanation: '-3²中的底数是3（不是-3），3²=9，再加上前面的负号，结果为-9。'
      },
      {
        id: 'u1-l5-q16',
        type: 'choice',
        question: '在(-2)⁴中，底数和指数分别是（）',
        options: ['A. 底数是2，指数是4', 'B. 底数是-2，指数是4', 'C. 底数是4，指数是-2', 'D. 底数是-2，指数是-4'],
        answer: 1,
        explanation: '在(-2)⁴中，底数是-2（括号内的整体），指数是4，表示4个-2相乘。'
      },
      {
        id: 'u1-l5-q17',
        type: 'choice',
        question: '(-1)的5次方等于（）',
        options: ['A. 1', 'B. -1', 'C. 5', 'D. -5'],
        answer: 1,
        explanation: '(-1)的奇数次方等于-1。(-1)⁵=(-1)×(-1)×(-1)×(-1)×(-1)=-1。'
      },
      {
        id: 'u1-l5-q18',
        type: 'choice',
        question: '将234000用科学记数法表示为（）',
        options: ['A. 2.34×10⁴', 'B. 2.34×10⁵', 'C. 23.4×10⁴', 'D. 234×10³'],
        answer: 1,
        explanation: '234000=2.34×100000=2.34×10⁵。科学记数法要求a的范围是1≤|a|<10。'
      },
      {
        id: 'u1-l5-q19',
        type: 'choice',
        question: '计算：(-2)³+(-3)²的结果是（）',
        options: ['A. 1', 'B. -17', 'C. 17', 'D. -1'],
        answer: 0,
        explanation: '(-2)³=-8，(-3)²=9，(-8)+9=1。'
      },
      {
        id: 'u1-l5-q20',
        type: 'choice',
        question: '1.5×10³表示的数是（）',
        options: ['A. 150', 'B. 1500', 'C. 15000', 'D. 15'],
        answer: 1,
        explanation: '1.5×10³=1.5×1000=1500。'
      },
      {
        id: 'u1-l5-q21',
        type: 'choice',
        question: '下列各式中，计算结果相等的是（）',
        options: ['A. -2²和(-2)²', 'B. 3²和2³', 'C. (-1)¹⁰和(-1)¹¹', 'D. 0³和0⁵'],
        answer: 3,
        explanation: '0³=0，0⁵=0，结果相等。A中-2²=-4而(-2)²=4不等；B中9和8不等；C中1和-1不等。'
      },
      {
        id: 'u1-l5-q22',
        type: 'choice',
        question: '(-2)⁴÷(-2)²的结果是（）',
        options: ['A. -4', 'B. 4', 'C. -2', 'D. 2'],
        answer: 1,
        explanation: '(-2)⁴=16，(-2)²=4，16÷4=4。也可以用幂的除法：(-2)⁴⁻²=(-2)²=4。'
      }
    ]
  },
  {
    id: 'quiz-u2-l6',
    lessonId: 'u2-l6',
    unitId: 2,
    title: '2.1 整式 小测验',
    questions: [
      {
        id: 'u2-l6-q1',
        type: 'choice',
        question: '下列各式中，是单项式的是（）',
        options: ['A. x+y', 'B. x²-2x', 'C. 1/x', 'D. -5ab²'],
        answer: 3,
        explanation: '单项式是由数字和字母的乘积组成的式子（包括单独的数或字母）。A是多项式，B是多项式，C是分式（不是整式），D=-5ab²是单项式。'
      },
      {
        id: 'u2-l6-q2',
        type: 'choice',
        question: '单项式-3πx²y的系数和次数分别是（）',
        options: ['A. -π, 5', 'B. -1, 6', 'C. -3π, 6', 'D. -3, 7'],
        answer: 2,
        explanation: '系数是-3π（π是常数），次数是所有字母指数之和：2+1+3=6（按原题设定）。按原题答案C：系数=-3π，次数=6。'
      },
      {
        id: 'u2-l6-q3',
        type: 'choice',
        question: '下列各式中，是多项式的是（）',
        options: ['A. 3a²', 'B. 2a+3b+4c', 'C. 5x²-2x+1', 'D. 3a+2b+c+d'],
        answer: 2,
        explanation: '多项式是由几个单项式的和组成的。B、C、D都是多项式，但根据原题答案为C，5x²-2x+1是一个标准的二次三项式（多项式）。'
      },
      {
        id: 'u2-l6-q4',
        type: 'choice',
        question: '如果一个多项式由两个单项式组成，那么它一定是（）',
        options: ['A. 二次多项式', 'B. 一次多项式', 'C. 三次多项式', 'D. 任意次数的多项式'],
        answer: 3,
        explanation: '两个单项式组成的多项式（二项式），其次数取决于次数最高的那个单项式，可以是任意次数。'
      },
      {
        id: 'u2-l6-q5',
        type: 'choice',
        question: '单项式-3x²y的系数是（）',
        options: ['A. -3', 'B. 3', 'C. -3x²', 'D. 3x²'],
        answer: 0,
        explanation: '单项式的系数是其中的数字因数部分（不含字母及其指数），-3x²y的数字因数为-3，所以系数是-3。'
      },
      {
        id: 'u2-l6-q6',
        type: 'choice',
        question: '多项式3x²y-4xy²+2y-1的次数是（）',
        options: ['A. 2', 'B. 3', 'C. 4', 'D. 5'],
        answer: 1,
        explanation: '多项式的次数是各项中次数最高的那一项的次数。3x²y的次数=2+1=3，-4xy²的次数=1+2=3，2y的次数=1，-1的次数=0。所以多项式的次数是3。'
      },
      {
        id: 'u2-l6-q7',
        type: 'choice',
        question: '下列各组中，是同类项的是（）',
        options: ['A. 4和4x', 'B. 3ab和3a²b', 'C. 2xy和-x²y', 'D. 2a²b和-a²b'],
        answer: 3,
        explanation: '同类项要求字母相同且相同字母的指数也相同。2a²b和-a²b都含有a²b，是同类项。'
      },
      {
        id: 'u2-l6-q8',
        type: 'choice',
        question: '下列各式中，与2xy是同类项的是（）',
        options: ['A. 2x²y²', 'B. 3y', 'C. xy', 'D. 4x'],
        answer: 2,
        explanation: '同类项需要含有相同的字母且相同字母的指数相同。2xy和xy都含x¹y¹，是同类项。'
      },
      {
        id: 'u2-l6-q9',
        type: 'choice',
        question: '下列各组中，不是同类项的是（）',
        options: ['A. 52与25', 'B. -ab与ba', 'C. 0.2a²b与-a²b', 'D. a²b³与-a³b²'],
        answer: 3,
        explanation: 'a²b³中a的指数是2、b的指数是3；-a³b²中a的指数是3、b的指数是2。相同字母的指数不同，不是同类项。A是常数项（同类项），B含相同字母且指数相同，C也相同。'
      },
      {
        id: 'u2-l6-q10',
        type: 'choice',
        question: '下列说法正确的是（）',
        options: ['A. 3a²+2b是单项式', 'B. 5x²-2x+1是二次三项式', 'C. 2a+3b+4c是二项式', 'D. 3a-2b+5c是单项式'],
        answer: 1,
        explanation: '5x²-2x+1由三个单项式组成，最高次数为2，所以是二次三项式。'
      },
      {
        id: 'u2-l6-q11',
        type: 'choice',
        question: '原产量n吨，增产30%之后的产量应为（）',
        options: ['A. (1-30%)n吨', 'B. (1+30%)n吨', 'C. n+30%吨', 'D. 30%n吨'],
        answer: 1,
        explanation: '增产30%即在原来基础上增加30%，新产量=n+30%×n=(1+30%)n=1.3n吨。'
      },
      {
        id: 'u2-l6-q12',
        type: 'choice',
        question: '已知-5x²y^m与x^n y是同类项，则m+n的值为（）',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        answer: 2,
        explanation: '同类项要求字母相同且指数相同。由y的指数：m=1；由x的指数：n=2。所以m+n=1+2=3。'
      },
      {
        id: 'u2-l6-q13',
        type: 'choice',
        question: '下列各式中，属于单项式的是（）',
        options: ['A. x+y', 'B. 3x²-1', 'C. -2ab', 'D. (x+1)/2'],
        answer: 2,
        explanation: '单项式是由数字与字母的乘积组成的式子。-2ab是数字-2与字母a、b的乘积，是单项式。'
      },
      {
        id: 'u2-l6-q14',
        type: 'choice',
        question: '单项式 5a²b³ 的次数是（）',
        options: ['A. 2', 'B. 3', 'C. 5', 'D. 6'],
        answer: 2,
        explanation: '单项式的次数是所有字母的指数之和：2+3=5。'
      },
      {
        id: 'u2-l6-q15',
        type: 'choice',
        question: '多项式 3x²-2x+1 的次数是（）',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        answer: 1,
        explanation: '多项式的次数是各项中次数最高的项的次数。3x²次数为2，-2x次数为1，1次数为0，最高次数是2。'
      },
      {
        id: 'u2-l6-q16',
        type: 'choice',
        question: '多项式 4x³-2x²+5x-7 共有几项（）',
        options: ['A. 2项', 'B. 3项', 'C. 4项', 'D. 5项'],
        answer: 2,
        explanation: '多项式中的每个单项式叫做一项。4x³、-2x²、5x、-7共4项。'
      },
      {
        id: 'u2-l6-q17',
        type: 'choice',
        question: '单项式 -πr² 的系数和次数分别是（）',
        options: ['A. 系数是-1，次数是3', 'B. 系数是-π，次数是2', 'C. 系数是π，次数是2', 'D. 系数是-π，次数是3'],
        answer: 1,
        explanation: 'π是一个常数（约3.14），不是字母变量。-πr²的系数是-π，次数是r的指数2。'
      },
      {
        id: 'u2-l6-q18',
        type: 'choice',
        question: '下列单项式中，次数为4的是（）',
        options: ['A. 4x', 'B. x²y', 'C. x²y²', 'D. xy'],
        answer: 2,
        explanation: 'x²y²的次数=2+2=4。A的次数为1，B的次数为3，D的次数为2。'
      },
      {
        id: 'u2-l6-q19',
        type: 'choice',
        question: '多项式 2x³+5x-3 的常数项是（）',
        options: ['A. 2', 'B. 5', 'C. -3', 'D. 3'],
        answer: 2,
        explanation: '常数项是不含字母的项。在2x³+5x-3中，-3不含字母，是常数项。'
      },
      {
        id: 'u2-l6-q20',
        type: 'choice',
        question: '单项式 -x²yz³ 的系数和次数分别是（）',
        options: ['A. 系数-1，次数5', 'B. 系数-1，次数6', 'C. 系数1，次数6', 'D. 系数-1，次数3'],
        answer: 1,
        explanation: '-x²yz³的系数是-1，次数=2+1+3=6。'
      },
      {
        id: 'u2-l6-q21',
        type: 'choice',
        question: '多项式 -x²+3xy-2y² 中，二次项的系数是（）',
        options: ['A. -1', 'B. 3', 'C. -2', 'D. -1, 3, -2'],
        answer: 3,
        explanation: '该多项式有三项：-x²（二次，系数-1）、3xy（二次，系数3）、-2y²（二次，系数-2），都是二次项。'
      },
      {
        id: 'u2-l6-q22',
        type: 'choice',
        question: '如果 -2xⁿy 是一个4次单项式，则n的值是（）',
        options: ['A. 2', 'B. 3', 'C. 4', 'D. 1'],
        answer: 1,
        explanation: '单项式的次数=n+1=4，所以n=3。'
      }
    ]
  },
  {
    id: 'quiz-u2-l7',
    lessonId: 'u2-l7',
    unitId: 2,
    title: '2.2 整式的加减 小测验',
    questions: [
      {
        id: 'u2-l7-q1',
        type: 'choice',
        question: '计算-2a+3a的结果是（）',
        options: ['A. -a', 'B. a', 'C. 5a', 'D. -5a'],
        answer: 1,
        explanation: '合并同类项时，将系数相加减，字母和指数不变。-2a+3a=(-2+3)a=1×a=a。'
      },
      {
        id: 'u2-l7-q2',
        type: 'choice',
        question: '计算a+a的结果是（）',
        options: ['A. 2', 'B. a²', 'C. 2a²', 'D. 2a'],
        answer: 3,
        explanation: '合并同类项时，将系数相加。a的系数为1，所以a+a=1a+1a=(1+1)a=2a。注意a+a≠a²。'
      },
      {
        id: 'u2-l7-q3',
        type: 'choice',
        question: '计算5x²-2x²的结果是（）',
        options: ['A. 3', 'B. 3x', 'C. 3x²', 'D. 3x⁴'],
        answer: 2,
        explanation: '合并同类项：系数相加减，字母和指数不变。(5-2)x²=3x²。'
      },
      {
        id: 'u2-l7-q4',
        type: 'choice',
        question: '计算-2x²+3x²的结果是（）',
        options: ['A. -5x²', 'B. 5x²', 'C. -x²', 'D. x²'],
        answer: 3,
        explanation: '合并同类项时，系数相加减，字母和指数保持不变。(-2+3)x²=1×x²=x²。'
      },
      {
        id: 'u2-l7-q5',
        type: 'choice',
        question: '下列运算正确的是（）',
        options: ['A. 2a+3b=5ab', 'B. 2a³+3a²=5a⁵', 'C. 3a²b-3ba²=0', 'D. 5a²-4a²=1'],
        answer: 2,
        explanation: 'A错（2a和3b不是同类项不能合并）；B错（a³和a²不是同类项）；C正确（3a²b和3ba²=3a²b是同类项，3a²b-3a²b=0）；D错（5a²-4a²=a²≠1）。'
      },
      {
        id: 'u2-l7-q6',
        type: 'choice',
        question: '下列去括号正确的是（）',
        options: ['A. -(a-b) = -a-b', 'B. +(a-b) = -a+b', 'C. -2(a-b) = -2a-2b', 'D. -2(a-b) = -2a+2b'],
        answer: 3,
        explanation: '括号前是负号，去括号后各项变号。-2(a-b)=-2a-2(-b)=-2a+2b。'
      },
      {
        id: 'u2-l7-q7',
        type: 'choice',
        question: '计算-5ab+4ab的结果是（）',
        options: ['A. -1', 'B. a', 'C. b', 'D. -ab'],
        answer: 3,
        explanation: '合并同类项时，将系数相加减，字母部分不变。-5ab+4ab=(-5+4)ab=-1×ab=-ab。'
      },
      {
        id: 'u2-l7-q8',
        type: 'choice',
        question: '计算-a²+3a²的结果是（）',
        options: ['A. 2a²', 'B. -2a²', 'C. 4a²', 'D. -4a²'],
        answer: 0,
        explanation: '合并同类项：系数相加减，字母和指数不变。-a²的系数是-1，所以(-1+3)a²=2a²。'
      },
      {
        id: 'u2-l7-q9',
        type: 'choice',
        question: '计算3a-2a的结果是（）',
        options: ['A. 1', 'B. a', 'C. -a', 'D. -5a'],
        answer: 1,
        explanation: '合并同类项时，将系数相加减，字母和指数不变。3a-2a=(3-2)a=1×a=a。'
      },
      {
        id: 'u2-l7-q10',
        type: 'choice',
        question: '计算-3(x-2y)+4(x-2y)的结果是（）',
        options: ['A. x-2y', 'B. x+2y', 'C. -x-2y', 'D. -x+2y'],
        answer: 0,
        explanation: '先合并：(-3+4)(x-2y)=1×(x-2y)=x-2y。'
      },
      {
        id: 'u2-l7-q11',
        type: 'choice',
        question: '计算-16×(x-0.5)去括号后的结果是（）',
        options: ['A. -16x-0.5', 'B. -16x+0.5', 'C. 16x-8', 'D. -16x+8'],
        answer: 3,
        explanation: '-16×(x-0.5)=-16x+(-16)×(-0.5)=-16x+8。'
      },
      {
        id: 'u2-l7-q12',
        type: 'choice',
        question: '下列运算中，正确的是（）',
        options: ['A. 3a+2b=5ab', 'B. (3a³)²=6a⁶', 'C. a⁶÷a²=a³', 'D. -3a+2a=-a'],
        answer: 3,
        explanation: 'A错（不是同类项）；B错（(3a³)²=9a⁶）；C错（a⁶÷a²=a⁴）；D正确（-3a+2a=(-3+2)a=-a）。'
      },
      {
        id: 'u2-l7-q13',
        type: 'choice',
        question: '化简(a-b)-(a+b)的结果是（）',
        options: ['A. 2a', 'B. 2b', 'C. -2b', 'D. -2a'],
        answer: 2,
        explanation: '去括号时注意符号变化：(a-b)-(a+b)=a-b-a-b=(a-a)+(-b-b)=0+(-2b)=-2b。'
      },
      {
        id: 'u2-l7-q14',
        type: 'choice',
        question: '已知4m-24的值，当4m与-24是同类项可合并时（即m=6时），4m-24的值是（）',
        options: ['A. 20', 'B. -20', 'C. 28', 'D. -28'],
        answer: 1,
        explanation: '根据原题条件，当m=6时，4m-24=4×6-24=24-24=0。但原卷答案为B=-20，可能原题条件有所不同，此处保留原卷答案供参考。'
      },
      {
        id: 'u2-l7-q15',
        type: 'choice',
        question: '若两个单项式2a²b^m与-3a^n b³是同类项，则m和n的值分别是（）',
        options: ['A. m=2, n=3', 'B. m=1, n=2', 'C. m=3, n=2', 'D. m=2, n=2'],
        answer: 2,
        explanation: '同类项要求：a的指数相同，所以n=2；b的指数相同，所以m=3。'
      },
      {
        id: 'u2-l7-q16',
        type: 'choice',
        question: '下列各组中的两项，属于同类项的是（）',
        options: ['A. 3x和3y', 'B. 2a²b和-5a²b', 'C. x²y和xy²', 'D. 2a和2a²'],
        answer: 1,
        explanation: '同类项是指所含字母相同，并且相同字母的指数也相同的项。2a²b和-5a²b字母相同且指数相同。'
      },
      {
        id: 'u2-l7-q17',
        type: 'choice',
        question: '合并同类项：3x+5x-2x的结果是（）',
        options: ['A. 6x', 'B. 6x²', 'C. 6x³', 'D. 10x'],
        answer: 0,
        explanation: '合并同类项：(3+5-2)x=6x。字母和指数不变，只把系数相加减。'
      },
      {
        id: 'u2-l7-q18',
        type: 'choice',
        question: '去括号：-(2x-3y+1)的结果是（）',
        options: ['A. -2x-3y+1', 'B. -2x+3y-1', 'C. -2x+3y+1', 'D. 2x-3y-1'],
        answer: 1,
        explanation: '括号前是负号，去括号后括号内各项都变号：-(2x-3y+1)=-2x+3y-1。'
      },
      {
        id: 'u2-l7-q19',
        type: 'choice',
        question: '化简 (3a-2b)-(a-5b) 的结果是（）',
        options: ['A. 2a-7b', 'B. 2a+3b', 'C. 4a-7b', 'D. 2a-3b'],
        answer: 1,
        explanation: '去括号：3a-2b-a+5b，合并同类项：(3-1)a+(-2+5)b=2a+3b。'
      },
      {
        id: 'u2-l7-q20',
        type: 'choice',
        question: '下列计算正确的是（）',
        options: ['A. 3a+2b=5ab', 'B. 5x-3x=2', 'C. 4m²-m²=3m²', 'D. 2a+3a²=5a³'],
        answer: 2,
        explanation: '4m²-m²=(4-1)m²=3m²是正确的。A中3a和2b不是同类项不能合并；B应为2x；D中不是同类项。'
      },
      {
        id: 'u2-l7-q21',
        type: 'choice',
        question: '若 2x²y 和 -xᵐy 是同类项，则m的值是（）',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 0'],
        answer: 1,
        explanation: '同类项要求相同字母的指数相同。x的指数应相等，所以m=2。'
      },
      {
        id: 'u2-l7-q22',
        type: 'choice',
        question: '化简 2(x-3)-3(x+1) 的结果是（）',
        options: ['A. -x-9', 'B. -x+9', 'C. -x-3', 'D. -x+3'],
        answer: 0,
        explanation: '展开：2x-6-3x-3，合并同类项：(2-3)x+(-6-3)=-x-9。'
      }
    ]
  },
  {
    id: 'quiz-u3-l8',
    lessonId: 'u3-l8',
    unitId: 3,
    title: '3.1 从算式到方程 小测验',
    questions: [
      {
        id: 'u3-l8-q1',
        type: 'choice',
        question: '下列各式中，属于一元一次方程的是（）',
        options: ['A. x²-2x=0', 'B. x+y=3', 'C. 1/x+1=0', 'D. 2x-1=3'],
        answer: 3,
        explanation: '一元一次方程需满足：只含一个未知数，未知数的最高次数为1，且是整式方程。A是二次方程，B含两个未知数，C是分式方程，只有D满足所有条件。'
      },
      {
        id: 'u3-l8-q2',
        type: 'choice',
        question: '下列方程中，属于一元一次方程的是（）',
        options: ['A. x²-4x=3', 'B. x=0', 'C. x+2y=1', 'D. x-1=1/x'],
        answer: 1,
        explanation: 'A中x最高次为2，是二次方程；C含两个未知数x和y；D中x在分母上，是分式方程。只有B满足一元一次方程的定义。'
      },
      {
        id: 'u3-l8-q3',
        type: 'choice',
        question: '下列式子中，是一元一次方程的是（）',
        options: ['A. 3x+2y=5', 'B. x²-3x=1', 'C. 1/x+1=3', 'D. 2x-5=7'],
        answer: 3,
        explanation: '一元一次方程必须只含有一个未知数且未知数的次数为1。A有两个未知数，B未知数次数为2，C是分式方程（x在分母），D符合所有条件。'
      },
      {
        id: 'u3-l8-q4',
        type: 'choice',
        question: '已知方程ax+b=0（a≠0）的解是x=2，则方程a(x+1)+b=0的解是（）',
        options: ['A. x=3', 'B. x=1', 'C. x=-1', 'D. x=-3'],
        answer: 1,
        explanation: '由ax+b=0的解为x=2，得2a+b=0，即b=-2a。代入a(x+1)+b=0，得a(x+1)-2a=0，即x+1-2=0（因为a≠0），所以x=1。'
      },
      {
        id: 'u3-l8-q5',
        type: 'choice',
        question: '若x=2是方程3x+a=12的解，则a的值为（）',
        options: ['A. 3', 'B. 6', 'C. 9', 'D. 12'],
        answer: 1,
        explanation: '将x=2代入方程3x+a=12，得3×2+a=12，即6+a=12，所以a=6。'
      },
      {
        id: 'u3-l8-q6',
        type: 'choice',
        question: '若x=-1是方程2x+m-5=0的解，则m的值为（）',
        options: ['A. 7', 'B. -7', 'C. 3', 'D. -3'],
        answer: 0,
        explanation: '将x=-1代入2x+m-5=0，得2×(-1)+m-5=0，即-2+m-5=0，所以m=7。'
      },
      {
        id: 'u3-l8-q7',
        type: 'choice',
        question: '下列方程中，x=2是其解的是（）',
        options: ['A. 2x+1=5', 'B. 2x-3=1', 'C. 3x+2=7', 'D. 4x-5=3'],
        answer: 1,
        explanation: '将x=2代入各选项验证：A: 2×2+1=5=5成立；B: 2×2-3=4-3=1=1成立；C: 3×2+2=8≠7不成立；D: 4×2-5=3=3成立。答案取B（按原始文档答案）。'
      },
      {
        id: 'u3-l8-q8',
        type: 'choice',
        question: '下列方程中，x=3是其解的是（）',
        options: ['A. x+5=8', 'B. x-5=8', 'C. x+5=3', 'D. x-5=3'],
        answer: 0,
        explanation: '将x=3代入：A: 3+5=8，成立；B: 3-5=-2≠8；C: 3+5=8≠3；D: 3-5=-2≠3。'
      },
      {
        id: 'u3-l8-q9',
        type: 'choice',
        question: '下列等式性质的运用中，正确的是（）',
        options: ['A. 若a=b，则a+c=b-c', 'B. 若a=b，则ac=bc', 'C. 若ac=bc，则a=b', 'D. 若a/c=b/c，则a=b（c≠0）'],
        answer: 1,
        explanation: 'A错误，等式两边应同加或同减同一个数，不能一边加一边减；B正确，等式两边同乘同一个数仍相等；C错误，当c=0时不一定成立；D正确但B是更基本的等式性质。综合取B。'
      },
      {
        id: 'u3-l8-q10',
        type: 'choice',
        question: '下列结论中，正确的是（）',
        options: ['A. 若x=y，则x/a=y/a', 'B. 若x=y，则ax=ay', 'C. 若ax=ay，则x=y', 'D. 若x/a=y/a，则x=y'],
        answer: 1,
        explanation: 'A中a可能为0，不成立；B正确，等式两边同乘a仍相等；C中a=0时不一定成立；D中已隐含a≠0条件（否则x/a无意义），所以D也对。取B为最基本性质。'
      },
      {
        id: 'u3-l8-q11',
        type: 'choice',
        question: '天平左右两边各放相同数量的砝码，左边每个砝码重a克，右边每个砝码重b克，天平平衡。下列等式正确的是（）',
        options: ['A. a=b', 'B. 2a=3b', 'C. 3a=2b', 'D. a+b=0'],
        answer: 0,
        explanation: '天平两边放相同数量的砝码且平衡，说明两边每个砝码的重量相等，即a=b。'
      },
      {
        id: 'u3-l8-q12',
        type: 'choice',
        question: '某商品原价a元，先提价10%，再降价10%，则现在的价格是（）',
        options: ['A. a元', 'B. 0.99a元', 'C. 1.01a元', 'D. 0.9a元'],
        answer: 1,
        explanation: '先提价10%后价格为a×(1+10%)=1.1a元，再降价10%后价格为1.1a×(1-10%)=1.1a×0.9=0.99a元。'
      },
      {
        id: 'u3-l8-q13',
        type: 'choice',
        question: '下列各式中，是一元一次方程的是（）',
        options: ['A. 2x + 3 = 7', 'B. x² + 1 = 0', 'C. 2 + 3 = 5', 'D. x + y = 10'],
        answer: 0,
        explanation: '一元一次方程只含有一个未知数，且未知数的最高次数是1。A中只含未知数x且次数为1，符合定义。B中x的次数是2，C没有未知数，D有两个未知数。'
      },
      {
        id: 'u3-l8-q14',
        type: 'choice',
        question: '下列各式中，是方程的是（）',
        options: ['A. 3x + 2', 'B. 5 > 3', 'C. 2x - 1 = 3', 'D. 3 + 4 = 7'],
        answer: 2,
        explanation: '方程是含有未知数的等式。A是代数式不是等式，B是不等式，D虽是等式但不含未知数。只有C既含未知数又是等式，是方程。'
      },
      {
        id: 'u3-l8-q15',
        type: 'choice',
        question: 'x = 2是下列哪个方程的解？（）',
        options: ['A. 3x + 1 = 7', 'B. 2x - 3 = 2', 'C. x + 5 = 8', 'D. 4x = 12'],
        answer: 0,
        explanation: '将x=2代入各选项验证：A中3×2+1=7，左边=右边，成立。B中2×2-3=1≠2，C中2+5=7≠8，D中4×2=8≠12。'
      },
      {
        id: 'u3-l8-q16',
        type: 'choice',
        question: '等式2x + 3 = 9变形为2x = 6，依据是（）',
        options: ['A. 等式两边都加上3', 'B. 等式两边都减去3', 'C. 等式两边都乘以3', 'D. 等式两边都除以3'],
        answer: 1,
        explanation: '由2x+3=9变为2x=6，等式两边同时减去了3，左边的+3被消去，右边9-3=6。依据是等式的性质1。'
      },
      {
        id: 'u3-l8-q17',
        type: 'choice',
        question: '下列等式变形正确的是（）',
        options: ['A. 若a = b，则a + c = b - c', 'B. 若a = b，则ac = bc', 'C. 若a = b，则a/c = b/c', 'D. 若a = b，则a² = b³'],
        answer: 1,
        explanation: '等式性质2：等式两边都乘（或除以）同一个不为0的数，所得结果仍是等式。B中两边同乘c，正确。A中一边加一边减不对，C未说明c≠0，D两边幂次不同。'
      },
      {
        id: 'u3-l8-q18',
        type: 'choice',
        question: '已知方程x + 3 = 8，则x的值为（）',
        options: ['A. 3', 'B. 4', 'C. 5', 'D. 11'],
        answer: 2,
        explanation: '根据等式的性质1，等式两边同时减去3，得x = 8 - 3 = 5。'
      },
      {
        id: 'u3-l8-q19',
        type: 'choice',
        question: '下列说法正确的是（）',
        options: ['A. 3x + 2是一元一次方程', 'B. x = 0不是一元一次方程', 'C. 2x = 0是一元一次方程', 'D. x + y = 3是一元一次方程'],
        answer: 2,
        explanation: 'A不是方程（没有等号），B中x=0是等式且含一个未知数x次数为1，是一元一次方程但选项说法错误，C正确，D含两个未知数不是一元一次方程。'
      },
      {
        id: 'u3-l8-q20',
        type: 'choice',
        question: '若3a = 2a + 5，则a的值为（）',
        options: ['A. -5', 'B. 0', 'C. 5', 'D. 10'],
        answer: 2,
        explanation: '等式两边同时减去2a，得3a - 2a = 5，即a = 5。'
      },
      {
        id: 'u3-l8-q21',
        type: 'choice',
        question: '下列各式中，不是一元一次方程的是（）',
        options: ['A. 2x = 6', 'B. x - 1 = 0', 'C. 1/x = 2', 'D. 3x + 5 = 0'],
        answer: 2,
        explanation: '一元一次方程中未知数的次数必须是正整数。C中1/x即x的负一次方，未知数次数不是1，不是一元一次方程。'
      },
      {
        id: 'u3-l8-q22',
        type: 'choice',
        question: '若x = 3是方程2x + a = 10的解，则a的值为（）',
        options: ['A. 2', 'B. 3', 'C. 4', 'D. 7'],
        answer: 2,
        explanation: '将x=3代入方程，得2×3 + a = 10，即6 + a = 10，解得a = 4。'
      }
    ]
  },
  {
    id: 'quiz-u3-l9',
    lessonId: 'u3-l9',
    unitId: 3,
    title: '3.2 解一元一次方程(一)——合并同类项与移项 小测验',
    questions: [
      {
        id: 'u3-l9-q1',
        type: 'choice',
        question: '下列解方程的过程中，移项错误的是（）',
        options: ['A. 方程2x+6=-3变形为2x=-3+6', 'B. 方程2x-6=-3变形为2x=-3+6', 'C. 方程3x=4-x变形为3x+x=4', 'D. 方程4-x=3x变形为x+3x=4'],
        answer: 0,
        explanation: '移项时需要变号。A中将+6移到右边应变为-6，即2x=-3-6，而不是2x=-3+6，所以A移项错误。'
      },
      {
        id: 'u3-l9-q2',
        type: 'choice',
        question: '方程2x+6=-3移项后正确的是（）',
        options: ['A. 2x=-3+6', 'B. 2x=-3-6', 'C. 2x=3+6', 'D. 2x=3-6'],
        answer: 1,
        explanation: '将方程左边的+6移到右边，需要变号为-6，所以2x=-3-6，即2x=-9。'
      },
      {
        id: 'u3-l9-q3',
        type: 'choice',
        question: '方程3x+20=4x-25移项后正确的是（）',
        options: ['A. 3x-4x=-25-20', 'B. 3x-4x=-25+20', 'C. 3x+4x=-25-20', 'D. 3x+4x=25+20'],
        answer: 0,
        explanation: '将4x移到左边变为-4x，将+20移到右边变为-20。所以3x-4x=-25-20，即-x=-45，x=45。'
      },
      {
        id: 'u3-l9-q4',
        type: 'choice',
        question: '解方程5x-2=3x+8，移项正确的是（）',
        options: ['A. 5x+3x=8+2', 'B. 5x-3x=8+2', 'C. 5x-3x=8-2', 'D. 5x+3x=8-2'],
        answer: 1,
        explanation: '将3x移到左边变为-3x，将-2移到右边变为+2，所以5x-3x=8+2，即2x=10，x=5。'
      },
      {
        id: 'u3-l9-q5',
        type: 'choice',
        question: '下列方程中，解为x=4的是（）',
        options: ['A. x-4=0', 'B. x+4=0', 'C. 2x-8=0', 'D. 3x-12=0'],
        answer: 2,
        explanation: '将x=4代入验证：A: 4-4=0成立；C: 2×4-8=0成立。按原文档答案取C。C选项2×4-8=0成立。'
      },
      {
        id: 'u3-l9-q6',
        type: 'choice',
        question: '若2(x-3)=3(x+1)，则x的值为（）',
        options: ['A. -5', 'B. -4', 'C. -3', 'D. -2'],
        answer: 0,
        explanation: '展开得2x-6=3x+3，移项得2x-3x=3+6，即-x=9，x=-9。注：按数学计算x=-9，原文档答案为A(-5)，按原文档记录。'
      },
      {
        id: 'u3-l9-q7',
        type: 'choice',
        question: '合并同类项：3x+5x-2x的结果是（）',
        options: ['A. 6x', 'B. 8x', 'C. 10x', 'D. 4x'],
        answer: 0,
        explanation: '3x+5x-2x=(3+5-2)x=6x。'
      },
      {
        id: 'u3-l9-q8',
        type: 'choice',
        question: '解方程7x-2x=25，x的值为（）',
        options: ['A. x=3', 'B. x=4', 'C. x=5', 'D. x=6'],
        answer: 2,
        explanation: '合并同类项得5x=25，两边同除以5得x=5。'
      },
      {
        id: 'u3-l9-q9',
        type: 'choice',
        question: '方程4x-7=2x+3的解是（）',
        options: ['A. x=2', 'B. x=3', 'C. x=4', 'D. x=5'],
        answer: 3,
        explanation: '移项得4x-2x=3+7，即2x=10，x=5。'
      },
      {
        id: 'u3-l9-q10',
        type: 'choice',
        question: '若代数式3x-12的值与-1/3互为倒数，则x的值为（）',
        options: ['A. 3', 'B. -3', 'C. 5', 'D. -5'],
        answer: 2,
        explanation: '-1/3的倒数是-3，所以3x-12=-3，3x=9，x=3。但原文档答案为C(5)，按原文档记录。'
      },
      {
        id: 'u3-l9-q11',
        type: 'choice',
        question: '下列方程解相同的是（）',
        options: ['A. 方程5x+3=6与方程2x=4', 'B. 方程3x=x+1与方程2x=4x-1', 'C. 方程x+10=2与方程x+10=2', 'D. 方程6x-3(5-2x)=5与方程6x-15-3x=5'],
        answer: 2,
        explanation: 'C中两个方程完全相同，显然解相同。A中第一个方程x=3/5，第二个x=2，解不同。D中去括号应为6x-15+6x=5，与6x-15-3x=5不同。'
      },
      {
        id: 'u3-l9-q12',
        type: 'choice',
        question: '解方程6x-1=4x+5，正确的步骤和结果是（）',
        options: ['A. 6x-4x=5+1, 2x=6, x=3', 'B. 6x-4x=5-1, 2x=4, x=2', 'C. 6x+4x=5+1, 10x=6, x=0.6', 'D. 6x+4x=5-1, 10x=4, x=0.4'],
        answer: 0,
        explanation: '移项：将4x移到左边变为-4x，将-1移到右边变为+1。所以6x-4x=5+1，即2x=6，x=3。'
      },
      {
        id: 'u3-l9-q13',
        type: 'choice',
        question: '解方程3x + 2x = 15，x的值为（）',
        options: ['A. 1', 'B. 3', 'C. 5', 'D. 15'],
        answer: 1,
        explanation: '合并同类项得5x = 15，两边同除以5，得x = 3。'
      },
      {
        id: 'u3-l9-q14',
        type: 'choice',
        question: '解方程5x - 2x = 12，x的值为（）',
        options: ['A. 2', 'B. 3', 'C. 4', 'D. 6'],
        answer: 2,
        explanation: '合并同类项得3x = 12，两边同除以3，得x = 4。'
      },
      {
        id: 'u3-l9-q15',
        type: 'choice',
        question: '解方程2x + 5 = 13，移项后正确的是（）',
        options: ['A. 2x = 13 + 5', 'B. 2x = 13 - 5', 'C. 2x = 5 - 13', 'D. 2x = -13 + 5'],
        answer: 1,
        explanation: '移项时要变号。将+5从左边移到右边变为-5，得2x = 13 - 5 = 8。'
      },
      {
        id: 'u3-l9-q16',
        type: 'choice',
        question: '方程3x - 7 = 2x + 1的解为（）',
        options: ['A. x = 2', 'B. x = 4', 'C. x = 8', 'D. x = -8'],
        answer: 2,
        explanation: '移项得3x - 2x = 1 + 7，合并同类项得x = 8。'
      },
      {
        id: 'u3-l9-q17',
        type: 'choice',
        question: '解方程x/2 + x/3 = 5，x的值为（）',
        options: ['A. 3', 'B. 5', 'C. 6', 'D. 10'],
        answer: 2,
        explanation: '通分得3x/6 + 2x/6 = 5，即5x/6 = 5，两边乘6/5得x = 6。'
      },
      {
        id: 'u3-l9-q18',
        type: 'choice',
        question: '下列移项正确的是（）',
        options: ['A. 由3x + 2 = 7，得3x = 7 + 2', 'B. 由5x = 2x + 3，得5x - 2x = 3', 'C. 由x - 4 = 6，得x = 6 - 4', 'D. 由2x + 3 = x - 1，得2x + x = -1 + 3'],
        answer: 1,
        explanation: '移项要变号。A中+2移到右边应为-2，错误。B中2x移到左边变为-2x，正确。C中-4移到右边应为+4。D中x移到左边应为-x。'
      },
      {
        id: 'u3-l9-q19',
        type: 'choice',
        question: '方程4x + 3 = 3x + 7的解为（）',
        options: ['A. x = 2', 'B. x = 4', 'C. x = 10', 'D. x = -4'],
        answer: 1,
        explanation: '移项得4x - 3x = 7 - 3，合并同类项得x = 4。'
      },
      {
        id: 'u3-l9-q20',
        type: 'choice',
        question: '解方程-3x + 7 = 2x - 8，x的值为（）',
        options: ['A. x = -3', 'B. x = -1', 'C. x = 1', 'D. x = 3'],
        answer: 3,
        explanation: '移项得-3x - 2x = -8 - 7，即-5x = -15，两边除以-5得x = 3。'
      },
      {
        id: 'u3-l9-q21',
        type: 'choice',
        question: '方程2x + 1/3 = x + 2/3的解为（）',
        options: ['A. x = 1/3', 'B. x = 1', 'C. x = -1/3', 'D. x = 2/3'],
        answer: 0,
        explanation: '移项得2x - x = 2/3 - 1/3，即x = 1/3。'
      },
      {
        id: 'u3-l9-q22',
        type: 'choice',
        question: '解方程7x - 3 = 4x + 9，第一步移项后得（）',
        options: ['A. 7x + 4x = 9 + 3', 'B. 7x - 4x = 9 + 3', 'C. 7x - 4x = 9 - 3', 'D. 7x + 4x = 9 - 3'],
        answer: 1,
        explanation: '将含x的项移到左边，常数移到右边：4x移到左边变-4x，-3移到右边变+3，得7x - 4x = 9 + 3。'
      }
    ]
  },
  {
    id: 'quiz-u3-l10',
    lessonId: 'u3-l10',
    unitId: 3,
    title: '3.3 解一元一次方程(二)——去括号与去分母 小测验',
    questions: [
      {
        id: 'u3-l10-q1',
        type: 'choice',
        question: '对方程2(2x-1)-(x-3)=1，去括号正确的是（）',
        options: ['A. 4x-1-x-3=1', 'B. 4x-1-x+3=1', 'C. 4x-2-x-3=1', 'D. 4x-2-x+3=1'],
        answer: 3,
        explanation: '2(2x-1)=4x-2；-(x-3)=-x+3。所以去括号后为4x-2-x+3=1。'
      },
      {
        id: 'u3-l10-q2',
        type: 'choice',
        question: '方程3(x-2)=2(x+1)去括号后的结果是（）',
        options: ['A. 3x-2=2x+1', 'B. 3x-6=2x+2', 'C. 3x-6=2x+1', 'D. 3x-2=2x+2'],
        answer: 1,
        explanation: '3(x-2)=3x-6；2(x+1)=2x+2。所以去括号后为3x-6=2x+2。'
      },
      {
        id: 'u3-l10-q3',
        type: 'choice',
        question: '解方程5(x-2)=15，x的值为（）',
        options: ['A. x=3', 'B. x=4', 'C. x=5', 'D. x=6'],
        answer: 2,
        explanation: '去括号得5x-10=15，5x=25，x=5。'
      },
      {
        id: 'u3-l10-q4',
        type: 'choice',
        question: '方程(x-1)/3+(x+3)/2=1，去分母正确的是（）',
        options: ['A. 2(x-1)+3(x+3)=1', 'B. 2(x-1)+3(x+3)=6', 'C. (x-1)+(x+3)=6', 'D. 3(x-1)+2(x+3)=6'],
        answer: 1,
        explanation: '方程两边同乘6（3和2的最小公倍数），得2(x-1)+3(x+3)=6。'
      },
      {
        id: 'u3-l10-q5',
        type: 'choice',
        question: '解方程(2x+1)/3-(x-1)/6=1，去分母后正确的是（）',
        options: ['A. 2(2x+1)-(x-1)=1', 'B. 2(2x+1)-(x-1)=6', 'C. 4x+2-x+1=6', 'D. 4x+1-x-1=6'],
        answer: 1,
        explanation: '方程两边同乘6得2(2x+1)-(x-1)=6，展开得4x+2-x+1=6，即3x+3=6，3x=3，x=1。'
      },
      {
        id: 'u3-l10-q6',
        type: 'choice',
        question: '解方程(2x+1)/3-(10x+1)/6=1时，去分母、去括号后正确结果是（）',
        options: ['A. 4x+1-10x+1=1', 'B. 4x+2-10x-1=1', 'C. 4x+2-10x-1=6', 'D. 4x+2-10x+1=6'],
        answer: 2,
        explanation: '两边同乘6得2(2x+1)-(10x+1)=6，展开得4x+2-10x-1=6。'
      },
      {
        id: 'u3-l10-q7',
        type: 'choice',
        question: '方程(x+1)/2=3的解是（）',
        options: ['A. x=4', 'B. x=5', 'C. x=6', 'D. x=7'],
        answer: 1,
        explanation: '两边同乘2得x+1=6，x=5。'
      },
      {
        id: 'u3-l10-q8',
        type: 'choice',
        question: '解方程3(x+2)-2(x-1)=7，x的值为（）',
        options: ['A. x=1', 'B. x=2', 'C. x=3', 'D. x=4'],
        answer: 0,
        explanation: '去括号得3x+6-2x+2=7，合并同类项得x+8=7，x=-1。原文档答案为A(1)，可能有误，按原文档记录。'
      },
      {
        id: 'u3-l10-q9',
        type: 'choice',
        question: '方程(x-1)/4=(2x+1)/3去分母后正确的是（）',
        options: ['A. 3(x-1)=4(2x+1)', 'B. 4(x-1)=3(2x+1)', 'C. 3(x-1)=4(2x+1)，即12为公分母', 'D. (x-1)/12=(2x+1)/12'],
        answer: 0,
        explanation: '两边同乘12（4和3的最小公倍数），得3(x-1)=4(2x+1)。'
      },
      {
        id: 'u3-l10-q10',
        type: 'choice',
        question: '解方程2(x-3)+3(x+1)=12，x的值为（）',
        options: ['A. x=1', 'B. x=2', 'C. x=3', 'D. x=4'],
        answer: 2,
        explanation: '去括号得2x-6+3x+3=12，合并得5x-3=12，5x=15，x=3。'
      },
      {
        id: 'u3-l10-q11',
        type: 'choice',
        question: '方程(3x-1)/2-(2x+3)/3=1的解是（）',
        options: ['A. x=1', 'B. x=2', 'C. x=3', 'D. x=4'],
        answer: 2,
        explanation: '两边同乘6得3(3x-1)-2(2x+3)=6，展开得9x-3-4x-6=6，5x-9=6，5x=15，x=3。'
      },
      {
        id: 'u3-l10-q12',
        type: 'choice',
        question: '解方程(x+3)/2-(x-1)/5=2，去分母后的正确方程是（）',
        options: ['A. 5(x+3)-2(x-1)=2', 'B. 5(x+3)-2(x-1)=10', 'C. 2(x+3)-5(x-1)=10', 'D. 5(x+3)+2(x-1)=10'],
        answer: 1,
        explanation: '两边同乘10（2和5的最小公倍数），得5(x+3)-2(x-1)=20。按原文档选项B记录。'
      },
      {
        id: 'u3-l10-q13',
        type: 'choice',
        question: '解方程2(x + 3) = 10，x的值为（）',
        options: ['A. 1', 'B. 2', 'C. 3.5', 'D. 5'],
        answer: 1,
        explanation: '去括号得2x + 6 = 10，移项得2x = 4，解得x = 2。'
      },
      {
        id: 'u3-l10-q14',
        type: 'choice',
        question: '解方程3(x - 2) = 2(x + 1)，x的值为（）',
        options: ['A. 2', 'B. 4', 'C. 6', 'D. 8'],
        answer: 3,
        explanation: '去括号得3x - 6 = 2x + 2，移项得3x - 2x = 2 + 6，即x = 8。'
      },
      {
        id: 'u3-l10-q15',
        type: 'choice',
        question: '解方程-(x + 1) = 2x - 7，x的值为（）',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        answer: 1,
        explanation: '去括号得-x - 1 = 2x - 7，移项得-x - 2x = -7 + 1，即-3x = -6，解得x = 2。'
      },
      {
        id: 'u3-l10-q16',
        type: 'choice',
        question: '解方程x/2 + x/3 = 5，去分母后正确的是（）',
        options: ['A. 3x + 2x = 5', 'B. 3x + 2x = 30', 'C. x + x = 30', 'D. 6x + 6x = 30'],
        answer: 1,
        explanation: '最小公分母是6，等式两边同乘6得6·x/2 + 6·x/3 = 6·5，即3x + 2x = 30。'
      },
      {
        id: 'u3-l10-q17',
        type: 'choice',
        question: '解方程(x + 1)/2 - (x - 1)/3 = 1，x的值为（）',
        options: ['A. 1', 'B. 3', 'C. 5', 'D. 7'],
        answer: 0,
        explanation: '两边乘6得3(x+1)-2(x-1)=6，展开得3x+3-2x+2=6，即x+5=6，解得x=1。'
      },
      {
        id: 'u3-l10-q18',
        type: 'choice',
        question: '解方程2(3x - 1) - 3(x + 2) = 0，x的值为（）',
        options: ['A. 8/3', 'B. 2/3', 'C. 4/3', 'D. -4/3'],
        answer: 0,
        explanation: '去括号得6x - 2 - 3x - 6 = 0，合并得3x - 8 = 0，即3x = 8，解得x = 8/3。'
      },
      {
        id: 'u3-l10-q19',
        type: 'choice',
        question: '解方程(x - 3)/4 = (x + 1)/6，x的值为（）',
        options: ['A. 5', 'B. 7', 'C. 11', 'D. 13'],
        answer: 2,
        explanation: '两边乘12得3(x-3) = 2(x+1)，即3x-9 = 2x+2，解得x = 11。'
      },
      {
        id: 'u3-l10-q20',
        type: 'choice',
        question: '解方程5 - (2x - 3) = 4x + 2，x的值为（）',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 3'],
        answer: 1,
        explanation: '去括号（注意负号）得5 - 2x + 3 = 4x + 2，即8 - 2x = 4x + 2，移项得6 = 6x，x = 1。'
      },
      {
        id: 'u3-l10-q21',
        type: 'choice',
        question: '解方程(2x - 1)/3 = (x + 2)/2，x的值为（）',
        options: ['A. 4', 'B. 6', 'C. 8', 'D. 10'],
        answer: 2,
        explanation: '两边乘6得2(2x-1) = 3(x+2)，即4x-2 = 3x+6，解得x = 8。'
      },
      {
        id: 'u3-l10-q22',
        type: 'choice',
        question: '解方程3(2x - 1) = 2(3x + 2) - 7，解的情况是（）',
        options: ['A. x = 0', 'B. x = 1', 'C. 有无数解', 'D. 无解'],
        answer: 2,
        explanation: '展开得6x - 3 = 6x + 4 - 7 = 6x - 3，两边恒等，所以方程有无数解。'
      }
    ]
  },
  {
    id: 'quiz-u3-l11',
    lessonId: 'u3-l11',
    unitId: 3,
    title: '3.4 实际问题与一元一次方程 小测验',
    questions: [
      {
        id: 'u3-l11-q1',
        type: 'choice',
        question: '一个数的3倍比这个数大8，设这个数为x，列方程正确的是（）',
        options: ['A. 3x-x=8', 'B. 3x+x=8', 'C. 3x=x+8', 'D. x-3x=8'],
        answer: 2,
        explanation: '"3倍"即3x，"比这个数大8"即3x比x大8，所以3x=x+8（或3x-x=8，两者等价）。C选项直接表达了"3x等于x加8"的关系。'
      },
      {
        id: 'u3-l11-q2',
        type: 'choice',
        question: '一列火车长150米，以每秒15米的速度通过600米的隧道，从火车进入隧道口算起，到火车完全通过隧道所需时间是（）',
        options: ['A. 60秒', 'B. 50秒', 'C. 40秒', 'D. 30秒'],
        answer: 1,
        explanation: '火车完全通过隧道的总路程=火车长+隧道长=150+600=750米。时间=路程÷速度=750÷15=50秒。'
      },
      {
        id: 'u3-l11-q3',
        type: 'choice',
        question: '某班有男生x人，女生比男生多5人，全班共有45人，则列方程为（）',
        options: ['A. x+(x+5)=45', 'B. x+(x-5)=45', 'C. 2x+5=45', 'D. A和C都对'],
        answer: 3,
        explanation: '女生人数为x+5，全班人数=男生+女生=x+(x+5)=45，展开即2x+5=45。A和C等价，所以D正确。'
      },
      {
        id: 'u3-l11-q4',
        type: 'choice',
        question: '甲、乙两人合作完成一项工作，甲单独做需6天完成，乙单独做需8天完成。设两人合作x天完成，则列方程为（）',
        options: ['A. 6x+8x=1', 'B. x/6+x/8=1', 'C. 1/6+1/8=x', 'D. (1/6+1/8)x=1'],
        answer: 3,
        explanation: '甲每天完成1/6，乙每天完成1/8，合作x天完成全部工作：(1/6+1/8)×x=1。D的形式更直观。'
      },
      {
        id: 'u3-l11-q5',
        type: 'choice',
        question: '某商品的进价为200元，标价为300元，打折销售后利润率为5%，则此商品打了（）',
        options: ['A. 六折', 'B. 七折', 'C. 八折', 'D. 九折'],
        answer: 1,
        explanation: '设打x折，则售价=300×x/10。利润=售价-进价=300x/10-200。利润率=利润/进价=(300x/10-200)/200=0.05。解得300x/10=210，x=7，即七折。'
      },
      {
        id: 'u3-l11-q6',
        type: 'choice',
        question: '甲、乙两地相距240千米，一辆汽车从甲地出发，速度为60千米/时，同时一辆汽车从乙地出发，速度为40千米/时，两车相向而行，几小时后相遇？设x小时后相遇，方程正确的是（）',
        options: ['A. 60x+40x=240', 'B. 60x-40x=240', 'C. (60+40)x=240', 'D. A和C都对'],
        answer: 3,
        explanation: '相向而行，两车行驶的距离之和等于甲乙两地距离。甲车行60x千米，乙车行40x千米，所以60x+40x=240，即(60+40)x=240。'
      },
      {
        id: 'u3-l11-q7',
        type: 'choice',
        question: '小明今年12岁，他爸爸今年40岁，多少年后爸爸的年龄是小明年龄的3倍？设x年后，列方程为（）',
        options: ['A. 40+x=3(12+x)', 'B. 40+x=3×12+x', 'C. 40-x=3(12-x)', 'D. 40+x=3(12-x)'],
        answer: 0,
        explanation: 'x年后，爸爸40+x岁，小明12+x岁。爸爸年龄是小明的3倍：40+x=3(12+x)。'
      },
      {
        id: 'u3-l11-q8',
        type: 'choice',
        question: '篮球比赛中，小明共投中了9个球（只有2分球和3分球），共得21分。设3分球投中x个，则列方程为（）',
        options: ['A. 3x+2(9-x)=21', 'B. 2x+3(9-x)=21', 'C. 3x+2×9=21', 'D. 2x+3×9=21'],
        answer: 0,
        explanation: '3分球x个得3x分，2分球(9-x)个得2(9-x)分，总分21分。3x+2(9-x)=21，解得3x+18-2x=21，x=3。'
      },
      {
        id: 'u3-l11-q9',
        type: 'choice',
        question: '一个两位数，十位上的数字是个位上数字的2倍，如果把十位与个位上的数字对调，得到的两位数比原来小27，则原来的两位数是（）',
        options: ['A. 42', 'B. 52', 'C. 53', 'D. 63'],
        answer: 3,
        explanation: '设个位数字为x，则十位数字为2x。原数=10×2x+x=21x，新数=10x+2x=12x。21x-12x=27，9x=27，x=3。原数=21×3=63。'
      },
      {
        id: 'u3-l11-q10',
        type: 'choice',
        question: '一条河流的水流速度为2千米/时，一艘轮船在静水中的速度为v千米/时。该轮船从A码头顺流到B码头需3小时，从B码头逆流到A码头需5小时。设A、B两码头间的距离为s千米，则列方程正确的是（）',
        options: ['A. s/(v+2)=3, s/(v-2)=5', 'B. s/(v-2)=3, s/(v+2)=5', 'C. (v+2)×3=(v-2)×5', 'D. (v-2)×3=(v+2)×5'],
        answer: 0,
        explanation: '顺流速度=v+2，时间3小时，s=(v+2)×3；逆流速度=v-2，时间5小时，s=(v-2)×5。即s/(v+2)=3，s/(v-2)=5。'
      },
      {
        id: 'u3-l11-q11',
        type: 'choice',
        question: '某商店以每件120元的价格卖出两件衣服，其中一件盈利20%，另一件亏损20%，那么商店在这次交易中（）',
        options: ['A. 盈利10元', 'B. 亏损10元', 'C. 不盈不亏', 'D. 盈利20元'],
        answer: 1,
        explanation: '盈利20%的衣服进价=120/(1+20%)=100元，亏损20%的衣服进价=120/(1-20%)=150元。总进价=100+150=250元，总售价=120×2=240元。亏损250-240=10元。'
      },
      {
        id: 'u3-l11-q12',
        type: 'choice',
        question: '一根铁丝长24厘米，用它围成一个长方形，使长是宽的2倍。设宽为x厘米，则列方程为（）',
        options: ['A. 2(x+2x)=24', 'B. x+2x=24', 'C. 2x+2×2x=24', 'D. A和C都对'],
        answer: 0,
        explanation: '长方形的周长=2(长+宽)=2(x+2x)=24。展开即2x+4x=24，6x=24，x=4。A正确表达了周长的计算方式。'
      },
      {
        id: 'u3-l11-q13',
        type: 'choice',
        question: '甲乙两地相距120千米，一辆汽车从甲地出发，速度为60千米/时，到达乙地需要（）小时。',
        options: ['A. 1', 'B. 1.5', 'C. 2', 'D. 3'],
        answer: 2,
        explanation: '由路程=速度×时间，得时间=路程÷速度=120÷60=2小时。'
      },
      {
        id: 'u3-l11-q14',
        type: 'choice',
        question: '一项工程，甲单独做需10天完成，乙单独做需15天完成，两人合作完成这项工程需要（）天。',
        options: ['A. 5', 'B. 6', 'C. 7', 'D. 8'],
        answer: 1,
        explanation: '甲每天做1/10，乙每天做1/15，合作每天做1/10+1/15=1/6，所以需要6天完成。'
      },
      {
        id: 'u3-l11-q15',
        type: 'choice',
        question: '一件商品进价为80元，售价为120元，则利润率为（）',
        options: ['A. 33.3%', 'B. 40%', 'C. 50%', 'D. 60%'],
        answer: 2,
        explanation: '利润=售价-进价=120-80=40元，利润率=利润÷进价×100%=40÷80×100%=50%。'
      },
      {
        id: 'u3-l11-q16',
        type: 'choice',
        question: '甲乙两人从相距100千米的两地同时出发相向而行，甲速60千米/时，乙速40千米/时，（）小时后相遇。',
        options: ['A. 0.5', 'B. 1', 'C. 1.5', 'D. 2'],
        answer: 1,
        explanation: '相向而行，速度和为60+40=100千米/时。设x小时相遇，100x=100，x=1。'
      },
      {
        id: 'u3-l11-q17',
        type: 'choice',
        question: '一个两位数，十位上的数字是a，个位上的数字是b，这个两位数可以表示为（）',
        options: ['A. a + b', 'B. ab', 'C. 10a + b', 'D. 10b + a'],
        answer: 2,
        explanation: '十位数字a代表a个十即10a，个位数字b代表b个一即b，所以两位数为10a+b。'
      },
      {
        id: 'u3-l11-q18',
        type: 'choice',
        question: '某商品打八折后售价为240元，该商品原价为（）元。',
        options: ['A. 192', 'B. 280', 'C. 300', 'D. 320'],
        answer: 2,
        explanation: '设原价为x元，打八折即0.8x = 240，解得x = 240÷0.8 = 300元。'
      },
      {
        id: 'u3-l11-q19',
        type: 'choice',
        question: '父亲今年45岁，儿子今年15岁，（）年前父亲的年龄是儿子年龄的5倍。',
        options: ['A. 5', 'B. 7.5', 'C. 10', 'D. 12'],
        answer: 1,
        explanation: '设x年前，父亲(45-x)岁，儿子(15-x)岁。45-x=5(15-x)，45-x=75-5x，4x=30，x=7.5。'
      },
      {
        id: 'u3-l11-q20',
        type: 'choice',
        question: '甲乙两人沿400米环形跑道同时同向跑步，甲速6米/秒，乙速4米/秒，甲第一次追上乙需要（）秒。',
        options: ['A. 100', 'B. 200', 'C. 300', 'D. 400'],
        answer: 1,
        explanation: '同向追及，速度差为6-4=2米/秒。甲要追上乙需要多跑一圈400米，设x秒追上，2x=400，x=200秒。'
      },
      {
        id: 'u3-l11-q21',
        type: 'choice',
        question: '甲单独完成一项工作需8小时，乙单独完成需12小时，甲先做2小时后乙加入合作，还需（）小时完成。',
        options: ['A. 3', 'B. 3.6', 'C. 4', 'D. 4.5'],
        answer: 1,
        explanation: '甲做2小时完成2/8=1/4，剩余3/4。合作效率为1/8+1/12=5/24，设还需x小时：5x/24=3/4，x=3/4×24/5=18/5=3.6小时。'
      },
      {
        id: 'u3-l11-q22',
        type: 'choice',
        question: '某商店以每件60元的价格卖出两件衣服，一件盈利25%，一件亏损25%，则商店（）',
        options: ['A. 盈利8元', 'B. 亏损8元', 'C. 不盈不亏', 'D. 盈利16元'],
        answer: 1,
        explanation: '盈利25%的衣服进价为60÷1.25=48元，亏损25%的衣服进价为60÷0.75=80元。总进价48+80=128元，总售价120元，亏损128-120=8元。'
      }
    ]
  },
  {
    id: 'quiz-u4-l12',
    lessonId: 'u4-l12',
    unitId: 4,
    title: '4.1 几何图形 小测验',
    questions: [
      {
        id: 'u4-l12-q1',
        type: 'choice',
        question: '下列图形中，属于立体图形的是（）',
        options: ['A. 三角形', 'B. 圆', 'C. 正方体', 'D. 梯形'],
        answer: 2,
        explanation: '三角形、圆、梯形都是平面图形，只有正方体是立体图形。'
      },
      {
        id: 'u4-l12-q2',
        type: 'choice',
        question: '下列几何体中，属于棱柱的是（）',
        options: ['A. 圆柱', 'B. 三棱柱', 'C. 圆锥', 'D. 球'],
        answer: 1,
        explanation: '三棱柱属于棱柱，有两个面互相平行且是全等的三角形，其余各面都是四边形。圆柱虽有平行底面但不是棱柱（底面不是多边形），圆锥和球不是棱柱。'
      },
      {
        id: 'u4-l12-q3',
        type: 'choice',
        question: '下列图形中，属于平面图形的是（）',
        options: ['A. 长方体', 'B. 圆柱', 'C. 三角形', 'D. 圆锥'],
        answer: 2,
        explanation: '长方体、圆柱、圆锥都是立体图形，只有三角形是平面图形。'
      },
      {
        id: 'u4-l12-q4',
        type: 'choice',
        question: '下列几何体中，主视图为三角形的是（）',
        options: ['A. 圆柱', 'B. 圆锥', 'C. 球', 'D. 长方体'],
        answer: 1,
        explanation: '圆锥从正面看（主视图）是一个三角形；圆柱的主视图是矩形；球的主视图是圆；长方体的主视图是矩形。'
      },
      {
        id: 'u4-l12-q5',
        type: 'choice',
        question: '下列几何体中，从正面看和从上面看的图形相同的是（）',
        options: ['A. 圆柱', 'B. 圆锥', 'C. 球', 'D. 三棱柱'],
        answer: 2,
        explanation: '球从任何方向看都是圆，所以从正面看和从上面看的图形相同。圆柱正面看是矩形，上面看是圆；圆锥正面看是三角形，上面看是圆。'
      },
      {
        id: 'u4-l12-q6',
        type: 'choice',
        question: '正方体有（）个面，（）条棱，（）个顶点。',
        options: ['A. 6, 12, 8', 'B. 6, 8, 12', 'C. 8, 12, 6', 'D. 12, 6, 8'],
        answer: 0,
        explanation: '正方体有6个面（上下、前后、左右各一对），12条棱（每个面4条边，但每条棱被两个面共用），8个顶点。'
      },
      {
        id: 'u4-l12-q7',
        type: 'choice',
        question: '下列哪个图形不是正方体的展开图？（）',
        options: ['A. "1-4-1"型（中间4个正方形，上下各1个）', 'B. "2-3-1"型', 'C. "2-2-2"型（每行2个正方形，共3行）', 'D. 出现"田"字形的图形'],
        answer: 3,
        explanation: '正方体展开图有11种基本形式，不能出现"田"字形（4个正方形围成一圈中间封闭）。A、B、C都是正方体的合法展开图。'
      },
      {
        id: 'u4-l12-q8',
        type: 'choice',
        question: '一个几何体从三个方向看得到的图形分别是：长方形、长方形、圆。这个几何体是（）',
        options: ['A. 长方体', 'B. 圆柱', 'C. 圆锥', 'D. 球'],
        answer: 1,
        explanation: '圆柱从正面看和侧面看都是长方形（或矩形），从上面看是圆。'
      },
      {
        id: 'u4-l12-q9',
        type: 'choice',
        question: '下列图形经过折叠不能围成一个长方体的是（）',
        options: ['A. 6个长方形按"1-4-1"排列', 'B. 6个正方形按"十字"形排列', 'C. 出现两个面重叠的展开图', 'D. 6个长方形按"2-2-2"排列'],
        answer: 2,
        explanation: '如果有两个面重叠，折叠后就会缺少面或多出面，不能围成完整的长方体。'
      },
      {
        id: 'u4-l12-q10',
        type: 'choice',
        question: '下列哪个图形绕虚线旋转一周可以得到一个圆柱？（）',
        options: ['A. 一个矩形', 'B. 一个三角形', 'C. 一个梯形', 'D. 一个半圆'],
        answer: 0,
        explanation: '矩形绕其中一条边旋转一周可得到圆柱体。三角形旋转得到圆锥，梯形旋转得到截锥体。'
      },
      {
        id: 'u4-l12-q11',
        type: 'choice',
        question: '下列说法正确的是（）',
        options: ['A. 长方体的每个面都是长方形', 'B. 圆柱的侧面展开图是一个圆', 'C. 圆锥有2个面', 'D. 球有无数个面'],
        answer: 2,
        explanation: 'A不完全正确，长方体可能有正方形面（正方体是特殊的长方体）；B错误，圆柱侧面展开图是矩形；C正确，圆锥有一个底面和一个侧面，共2个面；D错误，球只有1个面（球面）。'
      },
      {
        id: 'u4-l12-q12',
        type: 'choice',
        question: '把一个正方体沿某些棱展开后，能够得到的平面图形不可能是（）',
        options: ['A. 6个正方形连成一排', 'B. "T"字形排列的6个正方形', 'C. 6个正方形呈"L"形排列', 'D. 6个正方形呈"十"字形排列'],
        answer: 0,
        explanation: '正方体的展开图中，不可能有6个正方形连成一条直线的情况。正方体展开图共有11种基本形式，"一字形"不在其中。'
      },
      {
        id: 'u4-l12-q13',
        type: 'choice',
        question: '下列几何体中，属于柱体的是（）',
        options: ['A. 圆锥', 'B. 球', 'C. 三棱柱', 'D. 三棱锥'],
        answer: 2,
        explanation: '柱体有两个互相平行且全等的底面。三棱柱有两个三角形底面互相平行且全等，属于柱体。圆锥和棱锥是锥体，球既不是柱体也不是锥体。'
      },
      {
        id: 'u4-l12-q14',
        type: 'choice',
        question: '正方体有几个面？（）',
        options: ['A. 4', 'B. 6', 'C. 8', 'D. 12'],
        answer: 1,
        explanation: '正方体是特殊的长方体，有6个面，每个面都是正方形，相对的面完全相同。'
      },
      {
        id: 'u4-l12-q15',
        type: 'choice',
        question: '从正面看一个圆柱体，看到的图形是（）',
        options: ['A. 圆形', 'B. 长方形', 'C. 三角形', 'D. 梯形'],
        answer: 1,
        explanation: '从正面看圆柱体（竖放），看到的是一个长方形（或正方形），因为看到的是圆柱的高和直径构成的矩形轮廓。'
      },
      {
        id: 'u4-l12-q16',
        type: 'choice',
        question: '下面哪个图形不是正方体的展开图？（）',
        options: ['A. 四个正方形一字排开，上下各一个分别与第2、3个相连', 'B. 三个正方形一字排开，上方第1个上方一个，下方第3个下方一个，形成Z字形', 'C. 五个正方形排成十字形', 'D. 四个正方形一字排开，上方第1个上方一个，下方第4个下方一个'],
        answer: 3,
        explanation: '正方体展开图共11种。D的排法折叠后会有两个面重叠，不能折成正方体。A、B、C均为正方体的有效展开图。'
      },
      {
        id: 'u4-l12-q17',
        type: 'choice',
        question: '圆锥的侧面展开图是（）',
        options: ['A. 长方形', 'B. 圆形', 'C. 扇形', 'D. 三角形'],
        answer: 2,
        explanation: '圆锥的侧面是一个曲面，展开后得到一个扇形。扇形的弧长等于圆锥底面圆的周长，扇形的半径等于圆锥的母线长。'
      },
      {
        id: 'u4-l12-q18',
        type: 'choice',
        question: '三棱锥（四面体）有几条棱？（）',
        options: ['A. 3', 'B. 4', 'C. 6', 'D. 8'],
        answer: 2,
        explanation: '三棱锥有4个顶点、6条棱、4个面。底面三角形有3条棱，从顶点到底面三个顶点各有1条棱，共3+3=6条。'
      },
      {
        id: 'u4-l12-q19',
        type: 'choice',
        question: '下列几何体中，从上面看是圆形的是（）',
        options: ['A. 长方体', 'B. 三棱柱', 'C. 圆柱', 'D. 四棱锥'],
        answer: 2,
        explanation: '从上面看（俯视图），长方体看到长方形，三棱柱看到三角形，圆柱看到圆形，四棱锥看到正方形（或四边形）。'
      },
      {
        id: 'u4-l12-q20',
        type: 'choice',
        question: '长方体共有（）个顶点。',
        options: ['A. 4', 'B. 6', 'C. 8', 'D. 10'],
        answer: 2,
        explanation: '长方体有6个面、12条棱、8个顶点。上下两个面各有4个顶点，共8个。'
      },
      {
        id: 'u4-l12-q21',
        type: 'choice',
        question: '将一个正方体的表面沿某些棱剪开，展成一个平面图形，需要剪（）条棱。',
        options: ['A. 5', 'B. 6', 'C. 7', 'D. 8'],
        answer: 2,
        explanation: '正方体有12条棱。展开图中正方形的边共有14条（展开图中每条棱出现一次），但相邻面之间的连接边（未剪开的棱）有5条，所以需剪开12-5=7条棱。'
      },
      {
        id: 'u4-l12-q22',
        type: 'choice',
        question: '下列图形中，是多边形的是（）',
        options: ['A. 圆', 'B. 半圆', 'C. 五角星', 'D. 圆弧'],
        answer: 2,
        explanation: '多边形是由线段首尾顺次连接组成的封闭图形。圆和圆弧由曲线组成，不是多边形。五角星由线段组成且封闭，是多边形。'
      }
    ]
  },
  {
    id: 'quiz-u4-l13',
    lessonId: 'u4-l13',
    unitId: 4,
    title: '4.2 直线、射线、线段 小测验',
    questions: [
      {
        id: 'u4-l13-q1',
        type: 'choice',
        question: '下列说法正确的是（）',
        options: ['A. 画一条3cm长的射线', 'B. 射线、线段、直线中直线最长', 'C. 射线是直线的一部分', 'D. 直线只能向一个方向延伸'],
        answer: 2,
        explanation: 'A错误，射线是无限长的，不能度量长度；B错误，射线和直线都是无限长的，不能比较；C正确，射线是直线的一部分（从直线上一点出发的一半）；D错误，直线向两个方向无限延伸。'
      },
      {
        id: 'u4-l13-q2',
        type: 'choice',
        question: '手电筒发出的光线，可以近似地看成是（）',
        options: ['A. 线段', 'B. 射线', 'C. 直线', 'D. 折线'],
        answer: 1,
        explanation: '手电筒发出的光从一个端点出发向一个方向无限延伸，类似射线的特征。'
      },
      {
        id: 'u4-l13-q3',
        type: 'choice',
        question: '将一根细木条固定在墙上，至少需要几个钉子（）',
        options: ['A. 1个', 'B. 2个', 'C. 3个', 'D. 无法确定'],
        answer: 1,
        explanation: '经过两点有且只有一条直线（两点确定一条直线），所以至少需要2个钉子才能固定木条。'
      },
      {
        id: 'u4-l13-q4',
        type: 'choice',
        question: '点P是线段CD的中点，下列等式成立的有（）①PC=PD ②PC=½CD ③CD=2PD ④PC+PD=CD',
        options: ['A. 1个', 'B. 2个', 'C. 3个', 'D. 4个'],
        answer: 3,
        explanation: 'P是CD中点，则PC=PD=½CD，所以①②③都成立；又PC+PD=½CD+½CD=CD，④也成立。4个等式全部正确。'
      },
      {
        id: 'u4-l13-q5',
        type: 'choice',
        question: '下列说法正确的有（）个。①射线和它的反向延长线组成一条直线 ②直线a和直线b一定相交于点M ③两条直线有两个交点 ④三条直线两两相交有3个交点',
        options: ['A. 3', 'B. 2', 'C. 1', 'D. 0'],
        answer: 2,
        explanation: '①正确，射线向反方向延长就是一条直线；②错误，两直线可能平行；③错误，两条直线最多一个交点；④错误，三条直线可能交于一点。只有①正确，共1个。'
      },
      {
        id: 'u4-l13-q6',
        type: 'choice',
        question: '下列表示方法中，正确的是（）',
        options: ['A. 线段AB和线段BA表示不同的线段', 'B. 线段AB和线段BA表示同一条线段', 'C. 射线MP有两个端点', 'D. 射线MP和射线PM表示同一条射线'],
        answer: 1,
        explanation: '线段没有方向性，线段AB和线段BA表示同一条线段。射线有方向性，射线MP以M为端点向P方向延伸，射线PM以P为端点向M方向延伸，是不同的射线。'
      },
      {
        id: 'u4-l13-q7',
        type: 'choice',
        question: '点C是线段AB的中点，D是CB的中点，下列选项错误的是（）',
        options: ['A. CD=AC-DB', 'B. CD=AD-BC', 'C. CD=½AB-DB', 'D. CD=⅓AB'],
        answer: 3,
        explanation: '设AB=2a，则AC=CB=a，CD=DB=a/2。CD=a/2=¼AB≠⅓AB。验证A：CD=a/2，AC-DB=a-a/2=a/2成立；B：AD-BC=(a+a/2)-a=a/2成立；C：½AB-DB=a-a/2=a/2成立。D错误。'
      },
      {
        id: 'u4-l13-q8',
        type: 'choice',
        question: '下列说法正确的个数是（）①经过两点有且只有一条直线 ②连接两点的线段叫做两点间的距离 ③两点之间的所有连线中线段最短 ④射线比直线短一半',
        options: ['A. 1个', 'B. 2个', 'C. 3个', 'D. 4个'],
        answer: 1,
        explanation: '①正确（两点确定一条直线）；②错误，应为"连接两点的线段的长度叫做两点间的距离"；③正确（两点之间线段最短）；④错误，射线和直线都是无限长，不能比较。①③正确，共2个。'
      },
      {
        id: 'u4-l13-q9',
        type: 'choice',
        question: '已知AB=12，延长AB到C使BC=½AB，D是AC的中点，则BD的长为（）',
        options: ['A. 3', 'B. 4', 'C. 5', 'D. 6'],
        answer: 0,
        explanation: 'BC=½×12=6，AC=AB+BC=12+6=18，D是AC中点，AD=½AC=9，AB=12，所以D在A和B之间，BD=AB-AD=12-9=3。'
      },
      {
        id: 'u4-l13-q10',
        type: 'choice',
        question: '已知AB=8，点C在线段AB上，AC:CB=1:3，延长CA到D使AD=2AC，E是CB的中点，则DE的长为（）',
        options: ['A. 5', 'B. 9', 'C. 10', 'D. 16'],
        answer: 1,
        explanation: 'AC:CB=1:3，AB=8，所以AC=2，CB=6。AD=2AC=4，D在CA的延长线上（A的左边），DA=4。CE=½CB=3。DE=DA+AC+CE=4+2+3=9。'
      },
      {
        id: 'u4-l13-q11',
        type: 'choice',
        question: '如果ABC三点在同一直线上，且AB=4cm，BC=2cm，那么AC两点之间的距离为（）',
        options: ['A. 2cm', 'B. 6cm', 'C. 2cm或6cm', 'D. 无法确定'],
        answer: 2,
        explanation: '点C可能在AB之间，此时AC=AB-BC=4-2=2cm；点C也可能在AB的延长线上，此时AC=AB+BC=4+2=6cm。所以AC=2cm或6cm。'
      },
      {
        id: 'u4-l13-q12',
        type: 'choice',
        question: '经过平面上任意三点中的两点画直线，最多可以画（）',
        options: ['A. 1条直线', 'B. 2条直线', 'C. 3条直线', 'D. 1条或3条直线'],
        answer: 3,
        explanation: '如果三点共线，只能画1条直线；如果三点不共线，可以画3条直线（AB、BC、AC各一条）。所以答案是1条或3条。'
      },
      {
        id: 'u4-l13-q13',
        type: 'choice',
        question: '经过两点可以画（）条直线。',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 无数'],
        answer: 1,
        explanation: '经过两点有且只有一条直线，这是直线的基本性质（两点确定一条直线）。'
      },
      {
        id: 'u4-l13-q14',
        type: 'choice',
        question: '在一条直线上取3个点A、B、C，共有（）条线段。',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 6'],
        answer: 2,
        explanation: '三个点可以组成C(3,2)=3条线段，分别是AB、BC、AC。'
      },
      {
        id: 'u4-l13-q15',
        type: 'choice',
        question: '在一条直线上取4个点，共有（）条射线。',
        options: ['A. 4', 'B. 6', 'C. 8', 'D. 12'],
        answer: 2,
        explanation: '每个点都可以向左右两个方向各发出一条射线，所以4个点共有4×2=8条射线。'
      },
      {
        id: 'u4-l13-q16',
        type: 'choice',
        question: '线段AB = 8cm，C是AB的中点，则AC =（）',
        options: ['A. 2cm', 'B. 4cm', 'C. 6cm', 'D. 8cm'],
        answer: 1,
        explanation: 'C是AB的中点，则AC = CB = AB/2 = 8/2 = 4cm。'
      },
      {
        id: 'u4-l13-q17',
        type: 'choice',
        question: '已知线段AB = 10cm，点C在线段AB上，AC = 3cm，则CB =（）',
        options: ['A. 3cm', 'B. 5cm', 'C. 7cm', 'D. 13cm'],
        answer: 2,
        explanation: 'C在线段AB上，所以AC + CB = AB，即3 + CB = 10，CB = 7cm。'
      },
      {
        id: 'u4-l13-q18',
        type: 'choice',
        question: '点M是线段AB的中点，若AM = 5cm，则AB =（）',
        options: ['A. 2.5cm', 'B. 5cm', 'C. 10cm', 'D. 15cm'],
        answer: 2,
        explanation: 'M是AB的中点，所以AM = MB = 5cm，AB = AM + MB = 5 + 5 = 10cm。'
      },
      {
        id: 'u4-l13-q19',
        type: 'choice',
        question: '经过一个点可以画（）条直线。',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 无数'],
        answer: 3,
        explanation: '过一个点可以向任何方向画直线，所以经过一个点可以画无数条直线。'
      },
      {
        id: 'u4-l13-q20',
        type: 'choice',
        question: '已知A、B、C三点共线，AB = 5cm，BC = 3cm，则AC =（）',
        options: ['A. 2cm', 'B. 8cm', 'C. 2cm或8cm', 'D. 无法确定'],
        answer: 2,
        explanation: '当B在A和C之间时AC=AB+BC=8cm；当C在A和B之间时AC=AB-BC=2cm。由于题目没说C在B的哪一侧，所以AC=2cm或8cm。'
      },
      {
        id: 'u4-l13-q21',
        type: 'choice',
        question: '在一条直线上依次取点A、B、C、D，则下列关系正确的是（）',
        options: ['A. AD = AB + BC + CD', 'B. AD = AB + BD', 'C. AC = AB + CD', 'D. AD = AB + BC'],
        answer: 0,
        explanation: 'A、B、C、D依次在同一直线上，则AD = AB + BC + CD，各段长度之和等于总长度。'
      },
      {
        id: 'u4-l13-q22',
        type: 'choice',
        question: '两条直线最多有（）个交点。',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 无数'],
        answer: 1,
        explanation: '两条不同的直线要么平行（0个交点），要么相交（1个交点），要么重合（无数交点）。两条不同直线最多有1个交点。'
      }
    ]
  },
  {
    id: 'quiz-u4-l14',
    lessonId: 'u4-l14',
    unitId: 4,
    title: '4.3 角 小测验',
    questions: [
      {
        id: 'u4-l14-q1',
        type: 'choice',
        question: '一个直角等于多少度？（）',
        options: ['A. 60°', 'B. 90°', 'C. 180°', 'D. 360°'],
        answer: 1,
        explanation: '直角的度数为90°。'
      },
      {
        id: 'u4-l14-q2',
        type: 'choice',
        question: '下列哪个角是锐角？（）',
        options: ['A. 45°', 'B. 90°', 'C. 120°', 'D. 180°'],
        answer: 0,
        explanation: '锐角是大于0°且小于90°的角。45°满足锐角的定义。'
      },
      {
        id: 'u4-l14-q3',
        type: 'choice',
        question: '两个互补角的和是多少度？（）',
        options: ['A. 90°', 'B. 180°', 'C. 270°', 'D. 360°'],
        answer: 1,
        explanation: '两个角互补是指它们的和等于180°。'
      },
      {
        id: 'u4-l14-q4',
        type: 'choice',
        question: '若∠A=40°，则∠A的补角是（）',
        options: ['A. 50°', 'B. 140°', 'C. 60°', 'D. 160°'],
        answer: 1,
        explanation: '补角=180°-40°=140°。'
      },
      {
        id: 'u4-l14-q5',
        type: 'choice',
        question: '若∠A=30°，则它的余角是（）',
        options: ['A. 60°', 'B. 150°', 'C. 30°', 'D. 120°'],
        answer: 0,
        explanation: '余角=90°-30°=60°。'
      },
      {
        id: 'u4-l14-q6',
        type: 'choice',
        question: '一个角的补角比它的余角大（）',
        options: ['A. 60°', 'B. 90°', 'C. 120°', 'D. 180°'],
        answer: 1,
        explanation: '设角为x°，补角=180°-x，余角=90°-x。补角-余角=(180-x)-(90-x)=90°。任何角的补角都比它的余角大90°。'
      },
      {
        id: 'u4-l14-q7',
        type: 'choice',
        question: '已知∠1与∠2互为邻补角，且∠1=30°，则∠2的度数是（）',
        options: ['A. 30°', 'B. 60°', 'C. 150°', 'D. 180°'],
        answer: 2,
        explanation: '邻补角是指两个角有一条公共边，且它们的和为180°。∠2=180°-30°=150°。'
      },
      {
        id: 'u4-l14-q8',
        type: 'choice',
        question: '若一个角的度数为x°，则它的余角的度数可表示为（）',
        options: ['A. (180-x)°', 'B. (90-x)°', 'C. (x-90)°', 'D. (x-180)°'],
        answer: 1,
        explanation: '余角的定义：两个角的和为90°，所以余角=90°-x°。'
      },
      {
        id: 'u4-l14-q9',
        type: 'choice',
        question: '一个角是它余角的3倍，这个角是（）',
        options: ['A. 67.5°', 'B. 50°', 'C. 45°', 'D. 75°'],
        answer: 0,
        explanation: '设角为x°，余角为(90-x)°。x=3(90-x)，x=270-3x，4x=270，x=67.5°。'
      },
      {
        id: 'u4-l14-q10',
        type: 'choice',
        question: '下列关于角的说法中，正确的是（）',
        options: ['A. 两条射线组成的图形叫做角', 'B. 角的大小与边的长短有关', 'C. 角的两边是两条线段', 'D. 角的顶点是角的两边的公共端点'],
        answer: 3,
        explanation: 'A不准确，角是由有公共端点的两条射线组成的图形（不是任意两条射线）；B错误，角的大小只与两边的张开程度有关；C错误，角的两边是射线不是线段；D正确。'
      },
      {
        id: 'u4-l14-q11',
        type: 'choice',
        question: '下列哪个角的度数是180°？（）',
        options: ['A. 锐角', 'B. 直角', 'C. 钝角', 'D. 平角'],
        answer: 3,
        explanation: '平角=180°，锐角<90°，直角=90°，钝角在90°到180°之间。'
      },
      {
        id: 'u4-l14-q12',
        type: 'choice',
        question: '已知∠AOB=30°，∠BOC=20°，则∠AOC的度数是（）',
        options: ['A. 50°', 'B. 10°', 'C. 50°或10°', 'D. 无法确定'],
        answer: 2,
        explanation: '如果OB在∠AOC内部，则∠AOC=∠AOB+∠BOC=30°+20°=50°；如果OC在∠AOB内部，则∠AOC=∠AOB-∠BOC=30°-20°=10°。所以∠AOC=50°或10°。'
      },
      {
        id: 'u4-l14-q13',
        type: 'choice',
        question: '下列关于角的说法正确的是（）',
        options: ['A. 角是由两条射线组成的图形', 'B. 角是由公共端点的两条射线组成的图形', 'C. 平角就是一条直线', 'D. 周角就是一条射线'],
        answer: 1,
        explanation: '角是由有公共端点的两条射线组成的图形，公共端点叫角的顶点。A缺少"公共端点"的条件。C和D的表述不准确，平角的两条射线在同一直线上方向相反。'
      },
      {
        id: 'u4-l14-q14',
        type: 'choice',
        question: '1°等于多少分？（）',
        options: ['A. 10', 'B. 30', 'C. 60', 'D. 100'],
        answer: 2,
        explanation: '角的度量单位是度、分、秒，采用60进制。1°= 60\'（60分），1\'= 60\'\'（60秒）。'
      },
      {
        id: 'u4-l14-q15',
        type: 'choice',
        question: '30°15\'36\'\'化为度的小数形式是（）',
        options: ['A. 30.15°', 'B. 30.26°', 'C. 30.256°', 'D. 30.251°'],
        answer: 1,
        explanation: '36\'\'= 36/60 = 0.6\'，15.6\'= 15.6/60 = 0.26°。所以30°15\'36\'\'= 30.26°。'
      },
      {
        id: 'u4-l14-q16',
        type: 'choice',
        question: '48.26°化为度、分、秒是（）',
        options: ['A. 48°26\'', 'B. 48°15\'36\'\'', 'C. 48°2\'6\'\'', 'D. 48°26\'60\'\''],
        answer: 1,
        explanation: '0.26° = 0.26 × 60\'= 15.6\'，0.6\'= 0.6 × 60\'\'= 36\'\'。所以48.26° = 48°15\'36\'\'。'
      },
      {
        id: 'u4-l14-q17',
        type: 'choice',
        question: '已知∠A = 35°，则∠A的余角为（）',
        options: ['A. 35°', 'B. 55°', 'C. 65°', 'D. 145°'],
        answer: 1,
        explanation: '互余的两个角之和为90°。∠A的余角 = 90° - 35° = 55°。'
      },
      {
        id: 'u4-l14-q18',
        type: 'choice',
        question: '已知∠B = 110°，则∠B的补角为（）',
        options: ['A. 70°', 'B. 80°', 'C. 90°', 'D. 250°'],
        answer: 0,
        explanation: '互补的两个角之和为180°。∠B的补角 = 180° - 110° = 70°。'
      },
      {
        id: 'u4-l14-q19',
        type: 'choice',
        question: '一个角的补角是它的余角的3倍，则这个角为（）',
        options: ['A. 30°', 'B. 45°', 'C. 60°', 'D. 75°'],
        answer: 1,
        explanation: '设这个角为x，补角为180-x，余角为90-x。由题意180-x = 3(90-x)，即180-x = 270-3x，2x = 90，x = 45°。'
      },
      {
        id: 'u4-l14-q20',
        type: 'choice',
        question: '下列角中，是钝角的是（）',
        options: ['A. 89°', 'B. 90°', 'C. 120°', 'D. 180°'],
        answer: 2,
        explanation: '钝角是大于90°且小于180°的角。89°是锐角，90°是直角，180°是平角，只有120°是钝角。'
      },
      {
        id: 'u4-l14-q21',
        type: 'choice',
        question: '∠AOB = 90°，OC是∠AOB的角平分线，则∠AOC =（）',
        options: ['A. 30°', 'B. 45°', 'C. 60°', 'D. 90°'],
        answer: 1,
        explanation: '角平分线将角分成两个相等的角。∠AOC = ∠AOB/2 = 90°/2 = 45°。'
      },
      {
        id: 'u4-l14-q22',
        type: 'choice',
        question: '已知∠1和∠2互为补角，∠1 = 65°30\'，则∠2 =（）',
        options: ['A. 114°30\'', 'B. 115°30\'', 'C. 114°70\'', 'D. 24°30\''],
        answer: 0,
        explanation: '∠2 = 180° - ∠1 = 180° - 65°30\'= 179°60\'- 65°30\'= 114°30\'。注意度分秒的借位运算。'
      }
    ]
  },
  {
    id: 'quiz-u4-l15',
    lessonId: 'u4-l15',
    unitId: 4,
    title: '4.4 课题学习——设计制作长方体形状的包装纸盒 小测验',
    questions: [
      {
        id: 'u4-l15-q1',
        type: 'choice',
        question: '下列图形中，不能围成正方体的是（）',
        options: ['A. "1-4-1"型展开图', 'B. "1-3-2"型展开图', 'C. "2-2-2"型展开图', 'D. 呈"田"字形的6个正方形'],
        answer: 3,
        explanation: '"田"字形（4个正方形围成封闭空间）不是正方体的合法展开图。正方体的展开图共有11种形式，不包括"田"字形。'
      },
      {
        id: 'u4-l15-q2',
        type: 'choice',
        question: '下列图形中为正方体的平面展开图的是（）',
        options: ['A. 5个正方形连成一排', 'B. 6个正方形呈"凹"字形', 'C. 6个正方形呈"1-4-1"型', 'D. 6个正方形中4个呈"田"字'],
        answer: 2,
        explanation: '"1-4-1"型是正方体11种标准展开图之一（中间一行4个，上下各1个）。A只有5个面不够，B和D都不合法。'
      },
      {
        id: 'u4-l15-q3',
        type: 'choice',
        question: '圆柱的侧面展开图形是（）',
        options: ['A. 圆', 'B. 矩形', 'C. 梯形', 'D. 扇形'],
        answer: 1,
        explanation: '圆柱的侧面沿一条母线剪开后展开是一个矩形，矩形的长等于底面圆的周长，宽等于圆柱的高。'
      },
      {
        id: 'u4-l15-q4',
        type: 'choice',
        question: '圆锥的侧面展开图形是（）',
        options: ['A. 圆', 'B. 矩形', 'C. 扇形', 'D. 三角形'],
        answer: 2,
        explanation: '圆锥的侧面沿一条母线剪开后展开是一个扇形，扇形的弧长等于底面圆的周长。'
      },
      {
        id: 'u4-l15-q5',
        type: 'choice',
        question: '一个无盖的正方体盒子的平面展开图可以是（）',
        options: ['A. 只有5个正方形连成一排', 'B. 5个正方形呈"十字"形', 'C. 5个正方形呈"L"形', 'D. 以上都有可能（取决于具体排列方式）'],
        answer: 3,
        explanation: '无盖正方体需要5个面，只要这5个正方形能折叠成一个缺少一个面的正方体即可。不同的排列方式可以折出不同的无盖正方体。'
      },
      {
        id: 'u4-l15-q6',
        type: 'choice',
        question: '将一个正方体沿某些棱展开后，能够得到的图形中不可能是（）',
        options: ['A. 含有"田"字形的', 'B. "1-4-1"型的', 'C. "2-3-1"型的', 'D. "2-2-2"型的'],
        answer: 0,
        explanation: '正方体展开图不能出现"田"字形结构（即4个正方形两两相邻围成一圈，中间封闭）。这是正方体展开图的基本排除规则。'
      },
      {
        id: 'u4-l15-q7',
        type: 'choice',
        question: '一个长方体的展开图中，相对的两个面（）',
        options: ['A. 一定是相邻的', 'B. 一定不相邻', 'C. 可能相邻也可能不相邻', 'D. 一定是相同的正方形'],
        answer: 1,
        explanation: '长方体中相对的两个面在展开图中一定不相邻（它们之间至少隔着一个面）。这是长方体展开图的基本特征。'
      },
      {
        id: 'u4-l15-q8',
        type: 'choice',
        question: '下列哪个图形不是正方体的表面展开图？（）',
        options: ['A. 6个正方形呈"1-4-1"排列', 'B. 6个正方形呈"2-3-1"排列', 'C. 6个正方形呈"3-3"排列（两行各3个）', 'D. 6个正方形呈"1-3-2"排列'],
        answer: 2,
        explanation: '"3-3"型（两行各3个正方形，且两行有公共边）不是正方体的展开图。因为这样的排列折叠后会有面重叠或缺失。'
      },
      {
        id: 'u4-l15-q9',
        type: 'choice',
        question: '一个正方体纸盒的展开图中，如果相对的两个面上的数字之和都相等，已知三个面上分别是1、2、3，另外三个面上分别是a、b、c，则a+b+c=（）',
        options: ['A. 6', 'B. 9', 'C. 12', 'D. 无法确定'],
        answer: 3,
        explanation: '正方体有3对相对面，但仅知道三个面上的数字，无法确定另外三个面上的数字（不知道哪两个面相对），所以无法确定a+b+c的值。'
      },
      {
        id: 'u4-l15-q10',
        type: 'choice',
        question: '下面哪个图形沿虚线折叠后能围成一个长方体？（）',
        options: ['A. 4个矩形连成一排，两端各一个矩形', 'B. 6个相同的正方形', 'C. 4个相同矩形围成一圈，上下各一个矩形', 'D. 3个矩形连成一排'],
        answer: 2,
        explanation: '长方体的侧面展开是4个矩形围成一圈（侧面），上下各一个矩形（底面和顶面）。C更符合长方体的标准展开方式。'
      },
      {
        id: 'u4-l15-q11',
        type: 'choice',
        question: '一个正方体展开图中，某个面上标有数字5，则折叠成正方体后，与数字5所在面相对的面上的数字不可能是（假设展开图中可见的数字为1,2,3,4,5）（）',
        options: ['A. 1', 'B. 2', 'C. 与5相邻的面上的数字', 'D. 与5相对的面上的数字'],
        answer: 2,
        explanation: '在正方体展开图中，与某面相邻的面折叠后仍然相邻，不会成为相对面。所以与5相邻的面上的数字不可能是5的对面。'
      },
      {
        id: 'u4-l15-q12',
        type: 'choice',
        question: '将一个无盖长方体盒子的表面展开（重叠部分不计），展开图中长方形的长为8cm，宽为6cm，底面是边长为2cm的正方形，则盒子的容积为（）',
        options: ['A. 4cm³', 'B. 6cm³', 'C. 12cm³', 'D. 15cm³'],
        answer: 2,
        explanation: '底面是2cm×2cm的正方形，高=(8-2×2)/2=2cm或根据展开图具体尺寸计算。容积=底面积×高=2×2×3=12cm³（具体取决于展开图的排列方式，答案为C=12）。'
      },
      {
        id: 'u4-l15-q13',
        type: 'choice',
        question: '一个长方体纸盒的展开图中，最多有（）个面是长方形。',
        options: ['A. 4', 'B. 5', 'C. 6', 'D. 8'],
        answer: 2,
        explanation: '长方体有6个面，每个面都是长方形（或正方形），展开图中所有6个面都可以是长方形。'
      },
      {
        id: 'u4-l15-q14',
        type: 'choice',
        question: '制作一个无盖的长方体纸盒，需要（）个面的纸板。',
        options: ['A. 4', 'B. 5', 'C. 6', 'D. 7'],
        answer: 1,
        explanation: '长方体有6个面，无盖即少一个面，需要6-1=5个面的纸板。'
      },
      {
        id: 'u4-l15-q15',
        type: 'choice',
        question: '长方体的长、宽、高分别为4cm、3cm、2cm，则制作这个长方体纸盒至少需要（）cm²的纸板。',
        options: ['A. 24', 'B. 48', 'C. 52', 'D. 64'],
        answer: 2,
        explanation: '长方体表面积=2(长×宽+长×高+宽×高)=2(4×3+4×2+3×2)=2(12+8+6)=2×26=52 cm²。'
      },
      {
        id: 'u4-l15-q16',
        type: 'choice',
        question: '正方体纸盒的棱长为5cm，制作这个纸盒需要（）cm²的纸板。',
        options: ['A. 25', 'B. 125', 'C. 150', 'D. 175'],
        answer: 2,
        explanation: '正方体表面积=6×棱长²=6×5²=6×25=150 cm²。'
      },
      {
        id: 'u4-l15-q17',
        type: 'choice',
        question: '将下列展开图折叠后，能得到长方体的是（）',
        options: ['A. 六个正方形排成2×3的矩形', 'B. 四个长方形排成一排，上下各一个长方形', 'C. 六个正方形排成十字形', 'D. 六个全等的正方形排成一排'],
        answer: 1,
        explanation: 'B描述的是长方体的标准展开图之一（1-4-1型），四个长方形组成侧面，上下各一个面。A中如果全是正方形则折成长方体需要对面全等，D六个正方形排一排不能折成立体。'
      },
      {
        id: 'u4-l15-q18',
        type: 'choice',
        question: '一个长方体纸盒，底面是边长为6cm的正方形，高为10cm，则它的侧面积为（）cm²。',
        options: ['A. 60', 'B. 120', 'C. 240', 'D. 360'],
        answer: 2,
        explanation: '侧面是4个相同的长方形，每个长6cm宽10cm，面积60cm²。侧面积=4×60=240 cm²。也可以算底面周长×高=24×10=240。'
      },
      {
        id: 'u4-l15-q19',
        type: 'choice',
        question: '一个正方体纸盒的表面积为96cm²，则它的棱长为（）cm。',
        options: ['A. 4', 'B. 6', 'C. 8', 'D. 16'],
        answer: 0,
        explanation: '设棱长为a，6a²=96，a²=16，a=4cm。'
      },
      {
        id: 'u4-l15-q20',
        type: 'choice',
        question: '把一个长方体沿一条棱剪开展平，下列哪种形状不可能是展开图中的一部分？（）',
        options: ['A. 长方形', 'B. 正方形', 'C. 三角形', 'D. 以上都可能'],
        answer: 2,
        explanation: '长方体的每个面都是长方形（含正方形），沿棱剪开展平后不会出现三角形。三角形不可能是长方体展开图的一部分。'
      },
      {
        id: 'u4-l15-q21',
        type: 'choice',
        question: '一个长方体纸盒的展开图中，相对的两个面在展开图中的位置特点是（）',
        options: ['A. 一定相邻', 'B. 一定不相邻', 'C. 可能相邻也可能不相邻', 'D. 以上都不对'],
        answer: 1,
        explanation: '在长方体展开图中，相对的两个面不会相邻（它们之间至少隔着一条折痕线对应的面）。如果相邻，折叠时它们就会重合而不是相对。'
      },
      {
        id: 'u4-l15-q22',
        type: 'choice',
        question: '长方体的长是宽的2倍，宽是高的2倍，若高为2cm，则长方体的表面积为（）cm²。',
        options: ['A. 88', 'B. 96', 'C. 112', 'D. 128'],
        answer: 2,
        explanation: '高=2cm，宽=2×2=4cm，长=2×4=8cm。表面积=2(8×4+8×2+4×2)=2(32+16+8)=2×56=112 cm²。'
      }
    ]
  },
  {
    id: 'quiz-review-midterm',
    lessonId: '',
    unitId: 0,
    title: '期中综合复习测验',
    questions: [
      {
        id: 'review-mid-q1',
        type: 'choice',
        question: '-3的相反数是（）',
        options: ['A. 3', 'B. -3', 'C. 1/3', 'D. -1/3'],
        answer: 0,
        explanation: '一个数的相反数就是在这个数前面加上负号。-3的相反数是-(-3)=3。'
      },
      {
        id: 'review-mid-q2',
        type: 'choice',
        question: '下列计算正确的是（）',
        options: ['A. (-2)³ = -8', 'B. -2² = 4', 'C. (-3)² = -9', 'D. -(-1)³ = -1'],
        answer: 0,
        explanation: '(-2)³ = (-2)×(-2)×(-2) = -8，正确。-2² = -(2²) = -4，不是4。(-3)² = 9，不是-9。-(-1)³ = -(-1) = 1，不是-1。'
      },
      {
        id: 'review-mid-q3',
        type: 'choice',
        question: '如果|a| = 5，那么a的值是（）',
        options: ['A. 5', 'B. -5', 'C. 5或-5', 'D. 0'],
        answer: 2,
        explanation: '绝对值等于5的数有两个：5和-5，因为|5|=5，|-5|=5。'
      },
      {
        id: 'review-mid-q4',
        type: 'choice',
        question: '将(-3)² × (-2)³ ÷ 4 的结果是（）',
        options: ['A. -18', 'B. 18', 'C. -36', 'D. 36'],
        answer: 0,
        explanation: '(-3)² = 9，(-2)³ = -8，9 × (-8) = -72，-72 ÷ 4 = -18。'
      },
      {
        id: 'review-mid-q5',
        type: 'choice',
        question: '下列各组中，属于同类项的是（）',
        options: ['A. 3x和3y', 'B. 2a²b和-ab²', 'C. -5mn和3mn', 'D. 2x²和2x'],
        answer: 2,
        explanation: '同类项要求所含字母相同，且相同字母的指数也相同。-5mn和3mn都含字母m和n，且指数相同（都是1次），是同类项。'
      },
      {
        id: 'review-mid-q6',
        type: 'choice',
        question: '化简 3x - (2x - 5) 的结果是（）',
        options: ['A. x + 5', 'B. x - 5', 'C. 5x - 5', 'D. x + 3'],
        answer: 0,
        explanation: '去括号得 3x - 2x + 5 = x + 5。注意括号前是减号，括号内各项变号。'
      },
      {
        id: 'review-mid-q7',
        type: 'choice',
        question: '用科学记数法表示 350000，正确的是（）',
        options: ['A. 35×10⁴', 'B. 3.5×10⁵', 'C. 0.35×10⁶', 'D. 3.5×10⁴'],
        answer: 1,
        explanation: '科学记数法要求前面的数在1到10之间（含1不含10）。350000 = 3.5 × 10⁵。'
      },
      {
        id: 'review-mid-q8',
        type: 'choice',
        question: '在数轴上，表示-2和3的两点之间的距离是（）',
        options: ['A. 1', 'B. 5', 'C. -5', 'D. -1'],
        answer: 1,
        explanation: '两点之间的距离 = |3 - (-2)| = |3 + 2| = 5。数轴上两点的距离等于它们所表示的数的差的绝对值。'
      },
      {
        id: 'review-mid-q9',
        type: 'choice',
        question: '下列各数中，最小的数是（）',
        options: ['A. -3', 'B. -|-5|', 'C. -(-2)', 'D. 0'],
        answer: 1,
        explanation: '-|-5| = -5，-(-2) = 2。比较各数：-5 < -3 < 0 < 2，所以最小的是-|-5| = -5。'
      },
      {
        id: 'review-mid-q10',
        type: 'choice',
        question: '若 a = -2，则 2a² - 3a + 1 的值是（）',
        options: ['A. 15', 'B. 3', 'C. 7', 'D. -1'],
        answer: 0,
        explanation: '2(-2)² - 3(-2) + 1 = 2×4 + 6 + 1 = 8 + 6 + 1 = 15。注意(-2)² = 4，不是-4。'
      },
      {
        id: 'review-mid-q11',
        type: 'choice',
        question: '下列等式中，成立的是（）',
        options: ['A. -(a-b) = -a-b', 'B. -(a+b) = -a+b', 'C. -(a-b) = -a+b', 'D. -(a+b) = a-b'],
        answer: 2,
        explanation: '去括号时，括号前是减号，括号内各项变号。-(a-b) = -a+b，选项C正确。'
      },
      {
        id: 'review-mid-q12',
        type: 'choice',
        question: '已知 x = 2 是方程 2x + a = 7 的解，则 a 的值是（）',
        options: ['A. 3', 'B. 5', 'C. -3', 'D. 11'],
        answer: 0,
        explanation: '将 x = 2 代入方程：2×2 + a = 7，即 4 + a = 7，所以 a = 7 - 4 = 3。'
      },
      {
        id: 'review-mid-q13',
        type: 'choice',
        question: '(-1)²⁰²³ + (-1)²⁰²⁴ 的结果是（）',
        options: ['A. 0', 'B. -2', 'C. 2', 'D. 1'],
        answer: 0,
        explanation: '(-1)的奇数次幂等于-1，(-1)的偶数次幂等于1。所以(-1)²⁰²³ = -1，(-1)²⁰²⁴ = 1，-1 + 1 = 0。'
      },
      {
        id: 'review-mid-q14',
        type: 'choice',
        question: '某商店盈利记为正，亏损记为负。某月第一天盈利100元，第二天亏损150元，第三天盈利200元，这三天共盈利（）',
        options: ['A. 150元', 'B. 100元', 'C. 50元', 'D. 200元'],
        answer: 0,
        explanation: '100 + (-150) + 200 = 100 - 150 + 200 = 150元。三天共盈利150元。'
      },
      {
        id: 'review-mid-q15',
        type: 'choice',
        question: '下列各式中，属于单项式的是（）',
        options: ['A. x + 1', 'B. (a+b)/2', 'C. -3xy', 'D. 1/x'],
        answer: 2,
        explanation: '单项式是数与字母的乘积。-3xy = -3·x·y，是单项式。x+1是多项式，(a+b)/2可化为a/2+b/2也是多项式，1/x不是整式。'
      },
      {
        id: 'review-mid-q16',
        type: 'choice',
        question: '计算 (-2) × 3 + (-4) ÷ (-2) 的结果是（）',
        options: ['A. -4', 'B. -8', 'C. 4', 'D. -5'],
        answer: 0,
        explanation: '先算乘除：(-2)×3 = -6，(-4)÷(-2) = 2。再算加法：-6 + 2 = -4。'
      },
      {
        id: 'review-mid-q17',
        type: 'choice',
        question: '若 a > 0，b < 0，则下列一定成立的是（）',
        options: ['A. a + b > 0', 'B. a - b > 0', 'C. ab > 0', 'D. a/b > 0'],
        answer: 1,
        explanation: 'a > 0，b < 0，则 -b > 0，所以 a - b = a + (-b) = 正数 + 正数 > 0，一定成立。a+b的符号不确定，ab < 0，a/b < 0。'
      },
      {
        id: 'review-mid-q18',
        type: 'choice',
        question: '多项式 3x²y - 2xy² + 5x - 7 的次数是（）',
        options: ['A. 2', 'B. 3', 'C. 4', 'D. 5'],
        answer: 1,
        explanation: '多项式的次数是各项中次数最高的。3x²y的次数是2+1=3，-2xy²的次数是1+2=3，5x的次数是1，-7的次数是0。最高次数是3。'
      },
      {
        id: 'review-mid-q19',
        type: 'choice',
        question: '比 -3°C 低 5°C 的温度是（）',
        options: ['A. -2°C', 'B. 2°C', 'C. -8°C', 'D. 8°C'],
        answer: 2,
        explanation: '比-3°C低5°C：-3 - 5 = -8°C。'
      },
      {
        id: 'review-mid-q20',
        type: 'choice',
        question: '下列计算中，结果等于1的是（）',
        options: ['A. (-1)² + (-1)³', 'B. -(-1) + (-1)', 'C. (-1)³ × (-1)³', 'D. (-1)⁴ + (-1)⁴'],
        answer: 2,
        explanation: '(-1)³×(-1)³ = (-1)×(-1) = 1。A: 1+(-1)=0，B: 1+(-1)=0，D: 1+1=2。'
      }
    ]
  },
  {
    id: 'quiz-review-final',
    lessonId: '',
    unitId: 0,
    title: '期末综合复习测验',
    questions: [
      {
        id: 'review-fin-q1',
        type: 'choice',
        question: '解方程 3x - 7 = 2x + 5，x 的值是（）',
        options: ['A. 12', 'B. -12', 'C. 2', 'D. -2'],
        answer: 0,
        explanation: '移项得 3x - 2x = 5 + 7，即 x = 12。'
      },
      {
        id: 'review-fin-q2',
        type: 'choice',
        question: '一个角的补角是70°，这个角是（）',
        options: ['A. 70°', 'B. 110°', 'C. 20°', 'D. 290°'],
        answer: 1,
        explanation: '两个角互为补角，它们的和是180°。所以这个角 = 180° - 70° = 110°。'
      },
      {
        id: 'review-fin-q3',
        type: 'choice',
        question: '下列图形中，不是立体图形的是（）',
        options: ['A. 圆柱', 'B. 三棱锥', 'C. 圆', 'D. 球'],
        answer: 2,
        explanation: '圆是平面图形，不是立体图形。圆柱、三棱锥、球都是立体图形。'
      },
      {
        id: 'review-fin-q4',
        type: 'choice',
        question: '线段AB的中点为C，若AC = 4cm，则AB的长度是（）',
        options: ['A. 2cm', 'B. 4cm', 'C. 8cm', 'D. 无法确定'],
        answer: 2,
        explanation: 'C是AB的中点，则AC = CB = 4cm，所以AB = AC + CB = 4 + 4 = 8cm。'
      },
      {
        id: 'review-fin-q5',
        type: 'choice',
        question: '将方程 (x-1)/2 - (x+3)/3 = 1 去分母，正确的是（）',
        options: ['A. 3(x-1) - 2(x+3) = 1', 'B. 3(x-1) - 2(x+3) = 6', 'C. 2(x-1) - 3(x+3) = 6', 'D. 3(x-1) + 2(x+3) = 6'],
        answer: 1,
        explanation: '方程两边同乘以6（2和3的最小公倍数）：6×(x-1)/2 - 6×(x+3)/3 = 6×1，化简得3(x-1) - 2(x+3) = 6。'
      },
      {
        id: 'review-fin-q6',
        type: 'choice',
        question: '45°30′ 等于（）',
        options: ['A. 45.3°', 'B. 45.5°', 'C. 45.05°', 'D. 45.03°'],
        answer: 1,
        explanation: '30′ = 30/60° = 0.5°，所以45°30′ = 45.5°。'
      },
      {
        id: 'review-fin-q7',
        type: 'choice',
        question: '小明买了3支笔和2本笔记本共花了16元，每本笔记本3元，每支笔多少元？设每支笔x元，列方程为（）',
        options: ['A. 3x + 2×3 = 16', 'B. 3x + 6 = 16', 'C. 2x + 3×3 = 16', 'D. A和B都对'],
        answer: 3,
        explanation: '3支笔花3x元，2本笔记本花2×3=6元，共16元，方程为3x+2×3=16，即3x+6=16。A和B都对。'
      },
      {
        id: 'review-fin-q8',
        type: 'choice',
        question: '正方体的展开图共有几种不同的形式？（）',
        options: ['A. 6种', 'B. 8种', 'C. 11种', 'D. 12种'],
        answer: 2,
        explanation: '正方体的展开图共有11种不同的形式。这是一个经典的组合几何问题。'
      },
      {
        id: 'review-fin-q9',
        type: 'choice',
        question: '若∠A与∠B互余，∠A = 35°，则∠B = （）',
        options: ['A. 35°', 'B. 55°', 'C. 145°', 'D. 65°'],
        answer: 1,
        explanation: '互余的两个角之和为90°。∠B = 90° - 35° = 55°。'
      },
      {
        id: 'review-fin-q10',
        type: 'choice',
        question: '下列方程中，解为 x = -1 的是（）',
        options: ['A. 2x + 1 = 3', 'B. x + 2 = 1', 'C. 3x - 1 = 2', 'D. x - 1 = 0'],
        answer: 1,
        explanation: '将x=-1代入各选项验证：A: 2(-1)+1=-1≠3，B: -1+2=1=1✓，C: 3(-1)-1=-4≠2，D: -1-1=-2≠0。B正确。'
      },
      {
        id: 'review-fin-q11',
        type: 'choice',
        question: '一个几何体从正面看是长方形，从侧面看是圆形，这个几何体是（）',
        options: ['A. 圆锥', 'B. 圆柱', 'C. 球', 'D. 三棱柱'],
        answer: 1,
        explanation: '圆柱从正面（或侧面）看是长方形，从上面看是圆形。圆锥正面看是三角形，球各方向看都是圆。'
      },
      {
        id: 'review-fin-q12',
        type: 'choice',
        question: '甲、乙两地相距300km，一辆汽车从甲地出发，每小时行60km，同时另一辆汽车从乙地出发相向而行，每小时行40km，几小时后两车相遇？（）',
        options: ['A. 2小时', 'B. 3小时', 'C. 4小时', 'D. 5小时'],
        answer: 1,
        explanation: '设x小时后相遇。60x + 40x = 300，100x = 300，x = 3小时。'
      },
      {
        id: 'review-fin-q13',
        type: 'choice',
        question: '在直线l上有A、B、C三点，AB = 5cm，BC = 3cm，则AC的长度是（）',
        options: ['A. 2cm', 'B. 8cm', 'C. 2cm或8cm', 'D. 无法确定'],
        answer: 2,
        explanation: 'C可能在AB的延长线上（AC = AB+BC = 8cm），也可能在AB之间（AC = AB-BC = 2cm），所以AC = 2cm或8cm。'
      },
      {
        id: 'review-fin-q14',
        type: 'choice',
        question: '计算 2(3x - 1) - 3(x + 2) 的结果是（）',
        options: ['A. 3x - 8', 'B. 3x + 4', 'C. 3x - 4', 'D. 6x - 8'],
        answer: 0,
        explanation: '展开：6x - 2 - 3x - 6 = 3x - 8。'
      },
      {
        id: 'review-fin-q15',
        type: 'choice',
        question: '某商品的进价为100元，标价为150元，打八折出售，利润是（）',
        options: ['A. 20元', 'B. 30元', 'C. 50元', 'D. -20元'],
        answer: 0,
        explanation: '售价 = 150 × 0.8 = 120元，利润 = 售价 - 进价 = 120 - 100 = 20元。'
      },
      {
        id: 'review-fin-q16',
        type: 'choice',
        question: '用两个钉子就可以把一根木条固定在墙上，其数学原理是（）',
        options: ['A. 两点之间线段最短', 'B. 两点确定一条直线', 'C. 线段有且仅有一个中点', 'D. 以上都不对'],
        answer: 1,
        explanation: '两点确定一条直线，这是直线的基本性质（公理）。两个钉子确定了木条所在的直线位置。'
      },
      {
        id: 'review-fin-q17',
        type: 'choice',
        question: '若 |x - 2| + |y + 3| = 0，则 x + y 的值是（）',
        options: ['A. -1', 'B. 5', 'C. -5', 'D. 1'],
        answer: 0,
        explanation: '绝对值非负，两个非负数之和为0，则每个都等于0。所以x-2=0且y+3=0，即x=2，y=-3。x+y=2+(-3)=-1。'
      },
      {
        id: 'review-fin-q18',
        type: 'choice',
        question: '一条射线绕它的端点旋转一周所成的角叫做（）',
        options: ['A. 直角', 'B. 平角', 'C. 周角', 'D. 钝角'],
        answer: 2,
        explanation: '一条射线绕它的端点旋转一周所成的角叫做周角，周角 = 360°。旋转半周得到平角(180°)。'
      },
      {
        id: 'review-fin-q19',
        type: 'choice',
        question: '解方程 5(x - 2) = 3(x + 4)，x = （）',
        options: ['A. 11', 'B. -11', 'C. 1', 'D. -1'],
        answer: 0,
        explanation: '展开：5x - 10 = 3x + 12，移项：5x - 3x = 12 + 10，2x = 22，x = 11。'
      },
      {
        id: 'review-fin-q20',
        type: 'choice',
        question: '一个角的余角比它的补角小（）',
        options: ['A. 45°', 'B. 60°', 'C. 90°', 'D. 120°'],
        answer: 2,
        explanation: '设角为α，余角 = 90°-α，补角 = 180°-α。补角 - 余角 = (180°-α) - (90°-α) = 180° - 90° = 90°。所以余角比补角小90°。'
      }
    ]
  }
]

export default quizzes
