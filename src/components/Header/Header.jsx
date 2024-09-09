import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import SvgIcon from '@mui/material/SvgIcon';
import ModeSelect from '../ModeSelect';
import Workspaces from './Workspaces';
import Search from './Search';
import Link from '../Link';
import Menu from './Menu/Menu';
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg';
import Inbox from './Inbox';

function Header() {
    return (
        <Box
            px={2}
            sx={{
                height: (theme) => theme.app.headerHeight,
                mx: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid',
                borderColor: 'primary.main',
                overflowX: 'auto',
                '&::-webkit-scrollbar-track': { m: 2 },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    color: 'primary.main',
                }}
            >
                <Link
                    to={'/'}
                    sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', textDecoration: 'none' }}
                >
                    <SvgIcon component={TrelloIcon} inheritViewBox />
                    <Typography
                        variant="span"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                        }}
                    >
                        TaskFlow
                    </Typography>
                </Link>

                <Workspaces />
                <Workspaces />
                <Workspaces />
                <Button variant="outlined" startIcon={<AddIcon />}>
                    Create
                </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Search />
                <ModeSelect />
                <Inbox />
                <Menu />
            </Box>
        </Box>
    );
}

export default Header;
