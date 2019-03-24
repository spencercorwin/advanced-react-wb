import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';

class Item extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
    };

    render() {
        const { item } = this.props;
        return (
            <ItemStyles>
                {item.image ? <img src={item.image} alt={item.title} /> : null}
                <Title>
                    <Link href={{
                        pathName: '/item',
                        query: { id: item.id },
                    }}>
                        <a>
                            {item.title}
                        </a>
                    </Link>
                    <PriceTag>{formatMoney(item.price)}</PriceTag>
                </Title>
                <p>{item.description}</p>

                <div className="buttonList">
                    <Link href={{
                        pathName: 'update',
                        query: { id: item.id },
                    }}>
                        <a>Edit</a>
                    </Link>
                    <button>Add to Cart</button>
                    <button>Delete</button>
                </div>
            </ItemStyles>
        );
    }
}

export default Item;