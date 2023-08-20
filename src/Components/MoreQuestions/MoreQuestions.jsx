import { useState } from 'react'
import { Categories, CategoryItem, Container, QuestionsTitle, SubTitle, Subcategories, Title, Wrapper } from './style'
import { moreQuestions } from '../../utils/data';

const MoreQuestions = () => {
    const [categories, setCategories] = useState(moreQuestions);

    const toggleCategory = (questionsId) => {
        const updateCategories = categories?.map(category => {
            if (category.id === questionsId) {
                return { ...category, expend: !category.expend };
            }
            return category;
        });

        return setCategories(updateCategories);
    };

    return (
        <Container>
            <QuestionsTitle>Perguntas frequentes</QuestionsTitle>
            <Wrapper>
                {categories.map(category => (
                    <Categories key={category.id}>
                        <CategoryItem onClick={() => toggleCategory(category.id)}>
                            <Title>{category.name}</Title>
                        </CategoryItem>
                        {
                            category.expend && (
                                <Subcategories>
                                    {category.subcategories?.map(sub => (
                                        <SubTitle key={sub.id}>{sub.name}</SubTitle>
                                    ))}
                                </Subcategories>
                            )
                        }
                    </Categories>
                ))}
            </Wrapper>
        </Container>
    )
}

export default MoreQuestions